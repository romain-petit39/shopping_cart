import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartItem } from '../entity/cartItem';
import { ArticleService } from '../services/article.service';
import { ToasterService } from '../services/toaster.service';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items;
  cartItems: CartItem[] = []; // contenu du panier


  constructor(
    private articleService: ArticleService,
    public modalController: ModalController,
    public toastService: ToasterService,
  ) {}

  async ngOnInit() {
    await this.articleService.getAllArticles().then((data) => {
      if (data.ok) {
        data.json().then(products => {
          this.items = products;
        });
      } else {
        console.log('error reseaux');
      }
    });
  }

  async openCart() {
    const modal = await this.modalController.create({
      component: CartComponent,
      componentProps: {
        cartItems: this.cartItems,
      },
    });
    return await modal.present();
  }

  addToCart(article) {
    if (!article) {
      return;
    }
    const itemExistInCart = this.cartItems.find(
      (item: CartItem) => item.article.id === article.id
    );

    if (itemExistInCart) {
      itemExistInCart.quantite += 1;
      this.toastService.showSuccess(
        'Un autre article a bien été ajouté a votre panier'
      );
    } else {
      const itemToAdd = {
        article,
        quantite: 1,
      };
      this.cartItems.push(itemToAdd);
      this.toastService.showSuccess(
        'l\'article a bien été ajouté a votre panier'
      );
    }
  }
}

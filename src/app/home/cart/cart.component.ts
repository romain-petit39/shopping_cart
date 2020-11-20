import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartItem } from '../../entity/cartItem';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() cartItems: CartItem[];

  constructor(
    public modalController: ModalController,
    public validator: ValidatorService,
  ) { }


  closeCart() {
    this.modalController.dismiss();
  }

  calculateTotal() {
    let total = 0;

    for (const item of this.cartItems) {
      total += item.article.price * item.quantite;
    }

    return total;
  }

  addItem(item: CartItem) {
    if (!item) {
      return;
    }
    ++item.quantite;
  }

  removeItem(item: CartItem) {
    if (!item) {
      return;
    }
    if (item.quantite === 1 ) {
      this.validator.presentAlertConfirm('Etes- vous sûr de supprimer cet article du panier ?').then((resolve) => {
        if (resolve) {
          const index = this.cartItems.indexOf(item);
          if (index > -1) {
            this.cartItems.splice(index, 1);
          }
        } else {
          return;
        }
      });
    } else {
      --item.quantite;
    }
  }
}

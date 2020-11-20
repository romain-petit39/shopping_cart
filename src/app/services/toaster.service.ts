import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

constructor(public toastController: ToastController) { }

// async showToaster(message: string, level: string) {
//   const toast = await this.toastController.create({
//     message,
//     duration: 2000,
//     position: 'top',
//     color: level
//   });
//   toast.present();
// }

  async showSuccess(message: string) {
  const toast = await this.toastController.create({
    message,
    duration: 2000,
    position: 'bottom',
    color: 'success'
  });
  toast.present();
}

async showError(message: string) {
  const toast = await this.toastController.create({
    message,
    duration: 2000,
    position: 'bottom',
    color: 'danger'
  });
  toast.present();
}

async showWarning(message: string) {
  const toast = await this.toastController.create({
    message,
    duration: 2000,
    position: 'bottom',
    color: 'warning'
  });
  toast.present();
}

}

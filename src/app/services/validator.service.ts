import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor(public alertController: AlertController) {}

   presentAlertConfirm(message: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const alert = (await this.alertController.create({
        header: message,
        buttons: [
          {
            text: 'Yes',
            handler: () => resolve(true)
          },
          {
            text: 'No',
            role: 'cancel',
            handler: () => resolve(false)
          }
        ]
      })).present();
    });

  }
}

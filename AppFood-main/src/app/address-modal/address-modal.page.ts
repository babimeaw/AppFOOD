import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.page.html',
  styleUrls: ['./address-modal.page.scss'],
})
export class AddressModalPage {

  @Input() currentAddress: string;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  saveNewAddress(newAddress: string) {
  
    this.modalController.dismiss({ newAddress });
  }
}

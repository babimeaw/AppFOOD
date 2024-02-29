import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  orders: any[] = [];
  isLoading: boolean = false;
  model: any = {
    icon: 'trending-down-outline',
    title: 'Nenhum pedido encontrado.'
  };

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(()=>{
      this.orders = [
        {
          name: 'Dom Henrique',
          address: 'Guarapuava, Paraná',
          price: '60.00',
          status: 'Entregue',
          foods:[
            'Pizza x2',
            'Burguer x2'
          ],
          date:'Janeiro 29, 2024'
        },
        {
          name: 'Dois Henrique',
          address: 'Guarapuava, Paraná',
          price: '140.00',
          status: 'Entregue',
          foods:[
            'Pizza x1',
            'Gelatina x2'
          ],
          date:'Fevereiro 26, 2024'
        },
      ];
      this.isLoading = false;
    }, 3000);
  }

}

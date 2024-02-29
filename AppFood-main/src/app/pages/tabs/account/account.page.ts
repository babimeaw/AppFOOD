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
          address: 'Prudentopolis, Paraná',
          price: '60.00',
          status: 'Entregue',
          foods:[
            'Pizza 1x'
          ],
          date:'10 de Fevereiro, 2024'
        },
        {
          name: 'Dom Henrique',
          address: 'Guarapuava, Paraná',
          price: '40.00',
          status: 'Entregue',
          foods:[
            'Burguer x1'
          ],
          date:'14 de Janeiro, 2024'
        },
        {
          name: 'Dois Henrique 2',
          address: 'Guarapuava, Paraná',
          price: '91.00',
          status: 'Entregue',
          foods:[
            'Pizza x2'
          ],
          date:'Janeiro 5, 2024'
        },
      ];
      this.isLoading = false;
    }, 3000);
  }

}

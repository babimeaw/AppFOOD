import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensPage } from './itens.page';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import('./../cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: '',
    component: ItensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensPageRoutingModule {}

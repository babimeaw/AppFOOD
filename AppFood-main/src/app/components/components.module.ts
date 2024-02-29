import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoadingRestaurantsComponent } from './loading-restaurants/loading-restaurants.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { OrderComponent } from './order/order.component';
import { LoadingOrderComponent } from './loading-order/loading-order.component';
import { EmptyOrderComponent } from './empty-order/empty-order.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantsComponent, EmptyScreenComponent, OrderComponent, LoadingOrderComponent, EmptyOrderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, LoadingRestaurantsComponent, EmptyScreenComponent, OrderComponent, LoadingOrderComponent, EmptyOrderComponent]
})
export class ComponentsModule { }

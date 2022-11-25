import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';

import { AccountConfirmationComponent } from './restaurant-basics/account-confirmation/account-confirmation.component';
import { PickupComponent } from './services_hours/pickup/pickup.component';
import { RestaurantBasicsComponent } from './restaurant-basics/restaurant-basics.component';
import { LocationComponent } from './restaurant-basics/location/location.component';
import { DeliveryStatusComponent } from './services_hours/delivery/delivery-status/delivery-status.component';
import { DeliveryZoneComponent } from './services_hours/delivery/delivery-zone/delivery-zone.component';
@NgModule({
  declarations: [LocationComponent, AccountConfirmationComponent, PickupComponent, RestaurantBasicsComponent, DeliveryStatusComponent, DeliveryZoneComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
  ],
})
export class SetupModule { }

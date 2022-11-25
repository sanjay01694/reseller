import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseRestaurantComponent } from './choose-restaurant/choose-restaurant.component';
import { AccountConfirmationComponent } from './restaurant-basics/account-confirmation/account-confirmation.component';
import { LocationComponent } from './restaurant-basics/location/location.component';
import { NameAddressComponent } from './restaurant-basics/name-address/name-address.component';
import { OwnerPersonalInformationComponent } from './restaurant-basics/owner-personal-information/owner-personal-information.component';

import { SetupComponent } from './setup.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: SetupComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: ChooseRestaurantComponent
  //     },
  //     {
  //       path: 'restaurant_basics/address_form',
  //       component: NameAddressComponent
  //     },
  //     {
  //       path: 'restaurant_basics/owner_personal_info',
  //       component: OwnerPersonalInformationComponent
  //     },
  //     {
  //       path: 'restaurant_basics/address_location',
  //       component: LocationComponent
  //     },
  //     {
  //       path: 'restaurant_basics/account_confirmation',
  //       component: AccountConfirmationComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }

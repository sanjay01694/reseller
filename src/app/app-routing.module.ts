import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BodyComponent } from './base-layout/body/body.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChooseRestaurantComponent } from './pages/setup/choose-restaurant/choose-restaurant.component';
import { AccountConfirmationComponent } from './pages/setup/restaurant-basics/account-confirmation/account-confirmation.component';
import { LocationComponent } from './pages/setup/restaurant-basics/location/location.component';
import { NameAddressComponent } from './pages/setup/restaurant-basics/name-address/name-address.component';
import { OwnerPersonalInformationComponent } from './pages/setup/restaurant-basics/owner-personal-information/owner-personal-information.component';
import { RestaurantBasicsComponent } from './pages/setup/restaurant-basics/restaurant-basics.component';
import { DeliveryStatusComponent } from './pages/setup/services_hours/delivery/delivery-status/delivery-status.component';
import { DeliveryZoneComponent } from './pages/setup/services_hours/delivery/delivery-zone/delivery-zone.component';
import { DineinComponent } from './pages/setup/services_hours/dinein/dinein.component';
import { OpenHoursComponent } from './pages/setup/services_hours/open-hours/open-hours.component';
import { PickupComponent } from './pages/setup/services_hours/pickup/pickup.component';

import { SetupComponent } from './pages/setup/setup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/setup',
    pathMatch: 'full'
  },
  {
    path: 'setup',
    component: BodyComponent,
    children: [
      {
        path: '',
        component: SetupComponent,
        children: [
          {
            path: '',
            component: ChooseRestaurantComponent
          },
          {
            path: 'restaurant_basics',
            component: NameAddressComponent
          },
          {
            path: 'owner_personal_info',
            component: OwnerPersonalInformationComponent
          },
          {
            path: 'address_location',
            component: LocationComponent
          },
          {
            path: 'account_confirmation',
            component: AccountConfirmationComponent
          },
          {
            path: 'pickup',
            component: PickupComponent
          },
          {
            path: 'delivery',
            component: DeliveryStatusComponent
          },
          {
            path: 'delivery_zone',
            component:DeliveryZoneComponent
          },
          {
            path: 'dinein',
            component: DineinComponent
          },
          {
            path: 'open_hours',
            component: OpenHoursComponent
          }
        ]
      }
    ]
    // children: [
    //   // {
    //   //   path: '',
    //   //   component: DashboardComponent
    //   // },
    //   {
    //     path: '',
    //     loadChildren: () => import('./pages/setup/setup.module').then(m => m.SetupModule)
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

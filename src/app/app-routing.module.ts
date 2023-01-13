import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BodyComponent } from './base-layout/body/body.component';
import { DeliveryIntegrationComponent } from './pages/activate_more_services/delivery-integration/delivery-integration.component';
import { EmailMarketingComponent } from './pages/activate_more_services/email-marketing/email-marketing.component';
import { FiveStarReviewsComponent } from './pages/activate_more_services/five-star-reviews/five-star-reviews.component';
import { NewMobileAppsComponent } from './pages/activate_more_services/new-mobile-apps/new-mobile-apps.component';
import { NewWebsitesComponent } from './pages/activate_more_services/new-websites/new-websites.component';
import { PosIntegrationComponent } from './pages/activate_more_services/pos-integration/pos-integration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RestaurantListComponent } from './pages/restaurants/restaurant-list/restaurant-list.component';
import { RestaurantReportsComponent } from './pages/restaurants/restaurant-list/restaurant-reports/restaurant-reports.component';
import { ChooseRestaurantComponent } from './pages/setup/choose-restaurant/choose-restaurant.component';
import { ConfirmationComponent } from './pages/setup/confirmation/confirmation.component';
import { HandoverOptionsComponent } from './pages/setup/fulfillment/handover-options/handover-options.component';
import { AlertComponent } from './pages/setup/menu-setup_and_receive-orders/alert/alert.component';
import { MenuSetupComponent } from './pages/setup/menu-setup_and_receive-orders/menu-setup/menu-setup.component';
import { ReceiveOrderOptionsComponent } from './pages/setup/menu-setup_and_receive-orders/receiver-orders/receive-order-options/receive-order-options.component';
import { ReceiverOrdersComponent } from './pages/setup/menu-setup_and_receive-orders/receiver-orders/receiver-orders.component';
import { ActivateOnlinePaymentComponent } from './pages/setup/payment_and_taxes/activate-online-payment/activate-online-payment.component';
import { PaymentMethodComponent } from './pages/setup/payment_and_taxes/payment-method/payment-method.component';
import { ServiceChargesComponent } from './pages/setup/payment_and_taxes/service-charges/service-charges.component';
import { TaxesComponent } from './pages/setup/payment_and_taxes/taxes/taxes.component';
import { AccountConfirmationComponent } from './pages/setup/restaurant-basics/account-confirmation/account-confirmation.component';
import { LocationComponent } from './pages/setup/restaurant-basics/location/location.component';
import { NameAddressComponent } from './pages/setup/restaurant-basics/name-address/name-address.component';
import { OwnerPersonalInformationComponent } from './pages/setup/restaurant-basics/owner-personal-information/owner-personal-information.component';
import { RestaurantBasicsComponent } from './pages/setup/restaurant-basics/restaurant-basics.component';
import { CurbsideComponent } from './pages/setup/services_hours/curbside/curbside.component';
import { DeliveryStatusComponent } from './pages/setup/services_hours/delivery/delivery-status/delivery-status.component';
import { DeliveryZoneComponent } from './pages/setup/services_hours/delivery/delivery-zone/delivery-zone.component';
import { DineinComponent } from './pages/setup/services_hours/dinein/dinein.component';
import { ManageScheduleComponent } from './pages/setup/services_hours/manage-schedule/manage-schedule.component';
import { OpenHoursComponent } from './pages/setup/services_hours/open-hours/open-hours.component';
import { PickupComponent } from './pages/setup/services_hours/pickup/pickup.component';

import { SetupComponent } from './pages/setup/setup.component';
import { ContactComponent } from './pages/support/contact/contact.component';

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
            path: 'curbside',
            component: CurbsideComponent
          },
          {
            path: 'open_hours',
            component: OpenHoursComponent
          },
          {
            path: 'manage_scheduled',
            component: ManageScheduleComponent
          },
          {
            path: 'tax',
            component: TaxesComponent
          },
          {
            path: 'service_charges',
            component: ServiceChargesComponent
          },
          {
            path: 'payment_method',
            component: PaymentMethodComponent
          },
          {
            path: 'activate_online_payment',
            component: ActivateOnlinePaymentComponent
          },
          {
            path: 'receive_orders',
            component: ReceiverOrdersComponent
          },
          {
            path: 'receive_orders/receive_orders_options',
            component: ReceiveOrderOptionsComponent
          },
          {
            path: 'menu_setup',
            component: MenuSetupComponent
          },
          {
            path: 'alert',
            component: AlertComponent
          },
          {
            path: 'handover',
            component: HandoverOptionsComponent
          },
          {
            path: 'manage_restaurant_schedule',
            component: ManageScheduleComponent
          },
          {
            path: 'confirmation',
            component: ConfirmationComponent
          },
        ]
      },
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
  },
  {
    path: 'restaurants',
    component: BodyComponent,
    children: [
      {
        path: '',
        component: RestaurantListComponent
      },
      {
        path: 'restaurant_reports',
        component: RestaurantReportsComponent
      },
    ]
  },
  {
    path: 'activate_more_services',
    component: BodyComponent,
    children: [
      {
        path: '',
        component: DeliveryIntegrationComponent
      },
      {
        path: 'pos_integration',
        component: PosIntegrationComponent
      },
      {
        path: 'five_star_reviews',
        component: FiveStarReviewsComponent
      },
      {
        path: 'new_websites',
        component: NewWebsitesComponent
      },
      {
        path: 'new_mobile_apps',
        component: NewMobileAppsComponent
      },
      {
        path: 'email_marketing',
        component: EmailMarketingComponent
      }
    ]
  },
  {
    path: 'support',
    component: BodyComponent,
    children:[
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

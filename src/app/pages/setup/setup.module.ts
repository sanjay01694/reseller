import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';

import { AccountConfirmationComponent } from './restaurant-basics/account-confirmation/account-confirmation.component';
import { PickupComponent } from './services_hours/pickup/pickup.component';
import { RestaurantBasicsComponent } from './restaurant-basics/restaurant-basics.component';
import { LocationComponent } from './restaurant-basics/location/location.component';
import { DeliveryStatusComponent } from './services_hours/delivery/delivery-status/delivery-status.component';
import { DeliveryZoneComponent } from './services_hours/delivery/delivery-zone/delivery-zone.component';
import { DineinComponent } from './services_hours/dinein/dinein.component';
import { OpenHoursComponent } from './services_hours/open-hours/open-hours.component';
import { TaxesComponent } from './payment_and_taxes/taxes/taxes.component';
import { PaymentMethodComponent } from './payment_and_taxes/payment-method/payment-method.component';
import { ServiceChargesComponent } from './payment_and_taxes/service-charges/service-charges.component';
import { ReceiverOrdersComponent } from './menu-setup_and_receive-orders/receiver-orders/receiver-orders.component';
import { MenuSetupComponent } from './menu-setup_and_receive-orders/menu-setup/menu-setup.component';
import { AlertComponent } from './menu-setup_and_receive-orders/alert/alert.component';
import { ActivateOnlinePaymentComponent } from './payment_and_taxes/activate-online-payment/activate-online-payment.component';
import { HandoverOptionsComponent } from './fulfillment/handover-options/handover-options.component';
import { ManageScheduleComponent } from './services_hours/manage-schedule/manage-schedule.component';
import { ReceiveOrderOptionsComponent } from './menu-setup_and_receive-orders/receiver-orders/receive-order-options/receive-order-options.component';
import { CurbsideComponent } from './services_hours/curbside/curbside.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [LocationComponent, AccountConfirmationComponent, PickupComponent, RestaurantBasicsComponent, DeliveryStatusComponent, DeliveryZoneComponent, DineinComponent, OpenHoursComponent, TaxesComponent, PaymentMethodComponent, ServiceChargesComponent, ReceiverOrdersComponent, MenuSetupComponent, AlertComponent, ActivateOnlinePaymentComponent, HandoverOptionsComponent, ManageScheduleComponent, ReceiveOrderOptionsComponent, CurbsideComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
  ],
})
export class SetupModule { }

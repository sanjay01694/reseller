import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './base-layout/body/body.component';
import { HeaderComponent } from './base-layout/header/header.component';
import { FooterComponent } from './base-layout/footer/footer.component';
import { AddRestaurantComponent } from './pages/restaurant/add-restaurant/add-restaurant.component';
import { RestaurantListComponent } from './pages/restaurant/restaurant-list/restaurant-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './base-layout/sidebar/sidebar.component';
import { MobileHeaderComponent } from './base-layout/mobile-header/mobile-header.component';
import { QuickActionComponent } from './base-layout/quick-action/quick-action.component';
import { QuickPanelComponent } from './base-layout/quick-panel/quick-panel.component';
import { QuickUserComponent } from './base-layout/quick-user/quick-user.component';
import { BusinessInformationComponent } from './pages/restaurant/add-restaurant/business-information/business-information.component';
import { AdditionalInformationComponent } from './pages/restaurant/add-restaurant/additional-information/additional-information.component';
import { BankDetailsComponent } from './pages/restaurant/add-restaurant/bank-details/bank-details.component';
import { OrderInfoComponent } from './pages/restaurant/add-restaurant/order-info/order-info.component';
import { ServiceTypeComponent } from './pages/restaurant/add-restaurant/service-type/service-type.component';
import { RestaurantDetailComponent } from './pages/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantDashboardComponent } from './pages/restaurant/restaurant-detail/restaurant-dashboard/restaurant-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    AddRestaurantComponent,
    RestaurantListComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    MobileHeaderComponent,
    QuickActionComponent,
    QuickPanelComponent,
    QuickUserComponent,
    BusinessInformationComponent,
    AdditionalInformationComponent,
    BankDetailsComponent,
    OrderInfoComponent,
    ServiceTypeComponent,
    RestaurantDetailComponent,
    RestaurantDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

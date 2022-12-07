import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './base-layout/body/body.component';
import { HeaderComponent } from './base-layout/header/header.component';
import { FooterComponent } from './base-layout/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './base-layout/sidebar/sidebar.component';
import { MobileHeaderComponent } from './base-layout/mobile-header/mobile-header.component';
import { QuickActionComponent } from './base-layout/quick-action/quick-action.component';
import { QuickPanelComponent } from './base-layout/quick-panel/quick-panel.component';
import { QuickUserComponent } from './base-layout/quick-user/quick-user.component';

import { ChooseRestaurantComponent } from './pages/setup/choose-restaurant/choose-restaurant.component';
import { SetupComponent } from './pages/setup/setup.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NameAddressComponent } from './pages/setup/restaurant-basics/name-address/name-address.component';
import { SetupModule } from './pages/setup/setup.module';
import { OwnerPersonalInformationComponent } from './pages/setup/restaurant-basics/owner-personal-information/owner-personal-information.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    MobileHeaderComponent,
    QuickActionComponent,
    QuickPanelComponent,
    QuickUserComponent,
    NameAddressComponent,
    ChooseRestaurantComponent,
    SetupComponent,
    OwnerPersonalInformationComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [ { provide: LocationStrategy, useClass:HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BodyComponent } from './base-layout/body/body.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddRestaurantComponent } from './pages/restaurant/add-restaurant/add-restaurant.component';
import { RestaurantDashboardComponent } from './pages/restaurant/restaurant-detail/restaurant-dashboard/restaurant-dashboard.component';
import { RestaurantDetailComponent } from './pages/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './pages/restaurant/restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'add-restaurant',
        component: AddRestaurantComponent
      },
      {
        path: 'restaurant-list',
        component: RestaurantListComponent
      },
      {
        path: 'restaurant-profile',
        component: RestaurantDetailComponent,
        children: [
          {
            path: 'restaurant-dashboard',
            component: RestaurantDashboardComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

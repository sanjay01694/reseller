import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BodyComponent } from './base-layout/body/body.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddRestaurantComponent } from './pages/restaurant/add-restaurant/add-restaurant.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login',  component: LoginComponent },
  { path: 'locations', loadChildren: 'app/location/location.module#LocationModule', canActivate: [AuthGuard] },
  { path: 'products', loadChildren: 'app/product/product.module#ProductModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: 'app/auth/login/login.module#LoginModule', canActivate: [AuthGuard] },  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

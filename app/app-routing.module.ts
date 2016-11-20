import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home.component';
// import { ProductDatatableComponent }      from './product/product-datatable.component';
// import { ProductComponent } from './product/product.component';
import { LocationDatatableComponent } from './location/location-datatable.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  // { path: 'products', component: ProductDatatableComponent },
  //{ path: 'product', component: ProductComponent },
  { path: 'location', component: LocationComponent },
  { path: 'locations', component: LocationDatatableComponent },
  
  { path: 'products', loadChildren: 'app/product/product.module#ProductModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductDatatableComponent } from './product/product-datatable.component';
import { ProductComponent } from './product/product.component';
import { ProducDetailComponent } from  './product/product-detail.component';

import { PushNotificationsModule, SimpleNotificationsModule } from 'angular2-notifications';


//Servicees
import { ProductService } from './product/product.service';

//Routings
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    PushNotificationsModule,
    SimpleNotificationsModule
  ],
  declarations: [
    AppComponent,
    ProductDatatableComponent,
    HomeComponent,
    ProductComponent,
    ProducDetailComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent,
    AddProductComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule, ProductsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, ToastModule
  ],
})
export class ProductsModule { }

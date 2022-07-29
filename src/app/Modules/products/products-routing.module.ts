import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",component:ProductsListComponent
  },
  {
    path:"product/:id",component:ProductsDetailsComponent
  },
  {
    path:"add-product",component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

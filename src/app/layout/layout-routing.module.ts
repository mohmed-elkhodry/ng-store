import { MainLayoutComponent } from './main-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:MainLayoutComponent,children:[
    {path:"",component:HomepageComponent},
    {path:"products",loadChildren:()=>import("../Modules/products/products.module").then(m=>m.ProductsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

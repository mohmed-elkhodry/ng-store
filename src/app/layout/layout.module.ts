import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule, SharedModule, LayoutRoutingModule
  ],
  providers:[MessageService]
})
export class LayoutModule { }

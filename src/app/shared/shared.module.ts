import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { LoadingComponent } from './components/loading/loading.component';


const PrimeNg_Components = [
  ToastModule, ButtonModule, RatingModule, CardModule, ToolbarModule, MessagesModule, InputTextModule, InputNumberModule, InputTextareaModule
]

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule, ...PrimeNg_Components
  ],exports:[
    ...PrimeNg_Components,
    LoadingComponent
  ],
  providers:[MessageService]
})
export class SharedModule { }

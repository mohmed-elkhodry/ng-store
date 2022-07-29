import { UiService } from './../../../../shared/services/ui.service';
import { ProductInterface } from './../../interfaces/product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [MessageService]
})
export class AddProductComponent implements OnInit,OnDestroy {
  isSubmitted = false;
  form!: FormGroup;
  endSub$ = new Subject();
  constructor(private formBulider: FormBuilder,
    private messageService: MessageService,
    private router: Router,private prodSer:ProductsService,public uiSer:UiService) { }


  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.form = this.formBulider.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  submit(){
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.uiSer.showLoader()
      const ProductItem: ProductInterface = {
        title: this.form.controls['title'].value,
        price: this.form.controls['price'].value,
        category: this.form.controls['category'].value,
        description: this.form.controls['description'].value,
        image: this.form.controls['image'].value,
      }
      this.prodSer.addProduct(ProductItem).pipe(takeUntil(this.endSub$)).subscribe(res=> {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Product ${res.title} Added Successfully`,
        });
        this.uiSer.showLoader();
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 1000);
      })
    }
  }




  //close all subscribtions
  ngOnDestroy(): void {
    this.endSub$.next("");
    this.endSub$.complete()
  }

}

import { UiService } from './../../../../shared/services/ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductInterface } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit,OnDestroy {
  endSub$ = new Subject();
  products: ProductInterface[] = [];
  constructor(private prodSer: ProductsService,private uiSer:UiService) { }


  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.uiSer.showLoader();
    this.prodSer.getProducts("10").pipe(takeUntil(this.endSub$)).subscribe((prods)=> {
      this.products = prods;
      this.uiSer.hideLoader();
    })
  }

  // Close All Subscribtions
  ngOnDestroy(): void {
    this.endSub$.next("");
    this.endSub$.complete();
  }

}

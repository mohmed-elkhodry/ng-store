import { UiService } from './../../../../shared/services/ui.service';
import { ProductsService } from './../../services/products.service';
import { ProductInterface } from './../../interfaces/product.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, take, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit, OnDestroy {
  product!: ProductInterface;
  endSub$ = new Subject();
  constructor(private active: ActivatedRoute, private prodSer: ProductsService,private uiSer:UiService) { }


  ngOnInit(): void {
    this.getId();
  }
  getId() {
    this.uiSer.showLoader();
    this.active.params.pipe(take(1), pluck("id")).subscribe(id => {
      this.getProduct(id);
    })
  }

  getProduct(id: string) {
    this.prodSer.getProduct(id).pipe(takeUntil(this.endSub$)).subscribe(prod => {
      this.product = prod;
      this.uiSer.hideLoader();
    })
  }

  ngOnDestroy(): void {
    this.endSub$.next("");
    this.endSub$.complete()
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: ProductInterface;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}

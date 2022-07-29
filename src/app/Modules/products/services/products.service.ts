/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductInterface } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  prodApiUrl = environment.apiUrl + "products/";
  constructor(private http: HttpClient) {
  }
  getProducts(limit:string): Observable<Array<ProductInterface>> {
    return this.http.get<ProductInterface[]>(this.prodApiUrl + "?limit=" + limit);
  }
  getProduct(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.prodApiUrl}${id}`);
  }
  addProduct(Product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.prodApiUrl, Product)
  }
}

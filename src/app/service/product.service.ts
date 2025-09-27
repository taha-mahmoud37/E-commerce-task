import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env/env';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<{ products: Product[] }> {
    return this.httpClient.get<{ products: Product[] }>(
      `${env.apiUrl}products`
    );
  }
  getProductsByCategory(category: string): Observable<{ products: Product[] }> {
    return this.httpClient.get<{ products: Product[] }>(
      `${env.apiUrl}products/category/${category}`
    );
  }
}

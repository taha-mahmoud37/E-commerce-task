import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env/env';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getAllProducts(
    limit: number = 10,
    skip: number = 0
  ): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(`${env.apiUrl}products?limit=${limit}&skip=${skip}`);
  }
  getProductsByCategory(category: string, limit: number = 10,
    skip: number = 0): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      `${env.apiUrl}products/category/${category}?limit=${limit}&skip=${skip}`
    );
  }
}

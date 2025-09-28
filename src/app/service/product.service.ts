import { AddCartVariables } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env/env';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartsItems$ = new BehaviorSubject<number>(0);
  carts$ = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    limit: number = 10,
    skip: number = 0
  ): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      `${env.apiUrl}products?limit=${limit}&skip=${skip}`
    );
  }
  getProductsByCategory(
    category: string,
    limit: number = 10,
    skip: number = 0
  ): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      `${env.apiUrl}products/category/${category}?limit=${limit}&skip=${skip}`
    );
  }

  addedToCart(variables: AddCartVariables): Observable<any> {
    return this.httpClient.post(`${env.apiUrl}carts/add`, variables);
  }

  incrementCartItems(): void {
    const current = this.cartsItems$.getValue() ?? 0;
    this.cartsItems$.next(current + 1);
  }
  setCartItem(value: number) {
    this.cartsItems$.next(value);
  }
  getAllCart(): Observable<any> {
    const userId: number | null = Number(localStorage.getItem('userId'));
    return this.httpClient.get(`${env.apiUrl}carts/user/${userId}`);
  }
  setCart(items: any[]): void {
    this.carts$.next(items);
  }
  getCart(): any[] {
    return this.carts$.getValue();
  }
  addToCart(item: any): void {
    const current = this.carts$.getValue();
    this.carts$.next([...current, item]);
  }
}

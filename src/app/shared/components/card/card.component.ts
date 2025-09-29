import { AddCartVariables, Product } from './../../../models/product.model';
import { Component, input, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-card',
  imports: [DecimalPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  product = input<Product>({} as Product);
  cart: any[] = [];
  userId: number = Number(localStorage.getItem('userId'));
  constructor(private productService: ProductService) {}

  addedItemToCart(product: Product) {
    // const cartProduct = this.cart.find();
    const cartItems: AddCartVariables = {
      userId: this.userId,
      products: [
        {
          id: product.id,
          quantity: 1,
        },
      ],
    };
    this.productService.addedToCart(cartItems).subscribe((res) => {
      if (res) {
        this.productService.incrementCartItems();
      }
    });
  }

  ngOnInit(): void {
    this.productService.carts$.subscribe((res) => {
      this.cart = res;
    });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ProductService } from '../../service/product.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn!: boolean;
  cartItems: number = 0;
  private destory$ = new Subject<void>();
  constructor(
    public authService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.cartsItems$.subscribe((value) => {
      this.cartItems = value;
    });
    this.productService.getAllCart().subscribe((res) => {
      if (res) {
        this.productService.setCart(res.carts);
        this.productService.setCartItem(res.carts.length);
        // this.cartItems = res.carts.length;
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

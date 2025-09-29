import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ProductService } from '../../service/product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  cartItems: number = 0;

  private destroyRef = inject(DestroyRef);
  constructor(
    public authService: AuthService,
    private productService: ProductService
  ) {
    effect(() => {
      if (authService.isloggedIn()) {
        this.getAllCarts();
      }
    });
  }
  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.productService.setSearchTerm(value);
  }
  ngOnInit(): void {
    this.productService.cartsItems$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.cartItems = value;
      });
  }
  getAllCarts() {
    this.productService
      .getAllCart()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        if (res) {
          this.productService.setCart(res.carts);
          this.productService.setCartItem(res.carts.length);
        }
      });
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}

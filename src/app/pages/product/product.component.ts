import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, SideFilterComponent, PaginationComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = signal<Product[]>([]); // signal coming from service
  selectedCategory: string | null = null;
  totalItems: number = 100;
  limit: number = 15;
  currentPage: number = 1;
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  searchTerm = toSignal(this.productService.searchTerm$, { initialValue: '' }); // convert searchTerm$ from service to signal

  constructor() {}
  // to filter data based on search
  filteredProducts = computed(() =>
    this.products().filter((p) =>
      p.title.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );

  ngOnInit(): void {
    this.getAllProducts(this.limit, 0);
  }
  // Fetch all products from the service and update the signal
  getAllProducts(limit: number, skip: number): void {
    this.productService
      .getAllProducts(limit, skip)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        if (res?.products.length) {
          this.products.update(() => res.products);
          this.totalItems = res.total;
          console.log(this.products);
        }
      });
  }

  // Fetch products by category from the service and update the signal
  getProductsByCategory(category: string, limit: number, skip: number): void {
    this.productService
      .getProductsByCategory(category, limit, skip)
      .pipe(takeUntilDestroyed(this.destroyRef)) // to lock subscriptions automatic
      .subscribe((res) => {
        if (res?.products.length) {
          this.products.update(() => res.products);
          this.totalItems = res.total;
        }
      });
  }

  // Handle category selection from the side filter component
  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    const skip = (this.currentPage - 1) * this.limit;
    if (category === 'all') {
      this.getAllProducts(this.limit, skip);
      return;
    }

    this.getProductsByCategory(category, this.limit, skip);
  }

  // Pagination properties

  onPageChange(page: number): void {
    this.currentPage = page;
    const skip = (page - 1) * this.limit;
    this.getAllProducts(this.limit, skip);
    // Implement logic to fetch products for the selected page if needed
  }
}

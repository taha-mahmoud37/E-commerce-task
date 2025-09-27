import { Component, OnInit, signal, Signal } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, SideFilterComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = signal<Product[]>([]); // signal coming from service
  selectedCategory: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  // Fetch all products from the service and update the signal
  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((res) => {
      if (res?.products.length) {
        this.products.update(() => res.products);
      }
    });
  }

  // Fetch products by category from the service and update the signal
  getProductsByCategory(category: string): void {
    this.productService.getProductsByCategory(category).subscribe((res) => {
      if (res?.products.length) {
        this.products.update(() => res.products);
      }
    });
  }

  // Handle category selection from the side filter component
  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.getAllProducts();
      return;
    }

    this.getProductsByCategory(category);
  }
}

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
    this.productService.getAllProducts().subscribe((res) => {
      if (res?.products.length) {
        this.products.set(res.products);
        console.log('Products fetched in ProductComponent:', res.products);
        console.log('Products signal in ProductComponent:', this.products());
      }
    });
  }

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    console.log(`Selected category in ProductComponent: ${category}`);
  }
}

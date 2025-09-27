import { LowerCasePipe } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  imports: [LowerCasePipe],
  templateUrl: './side-filter.component.html',
  styleUrl: './side-filter.component.scss',
})
export class SideFilterComponent {
  allCategories = [
    'beauty',
    'fragrances',
    'furniture',
    'groceries',
    'home-decoration',
    'kitchen-accessories',
    'laptops',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'mobile-accessories',
    'motorcycle',
    'skin-care',
    'smartphones',
    'sports-accessories',
    'sunglasses',
    'tablets',
    'tops',
    'vehicle',
    'womens-bags',
    'womens-dresses',
    'womens-jewellery',
    'womens-shoes',
    'womens-watches',
  ];
  selectedCategory = output<string>();

  filterByCategory(category: string) {
    // Filter by category logic here
    console.log(`Filtering by category: ${category}`);
    this.selectedCategory.emit(category);
  }
}

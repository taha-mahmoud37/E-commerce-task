import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { SideFilterComponent } from './side-filter/side-filter.component';

@Component({
  selector: 'app-product',
  imports: [CardComponent, SideFilterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  selectedCategory: string | null = null;
  onCategorySelected(category: string) {
    this.selectedCategory = category;
    console.log(`Selected category in ProductComponent: ${category}`);
  }
}

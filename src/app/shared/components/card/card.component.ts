import { Component, input, OnChanges } from '@angular/core';
import { Product } from '../../../system/models/product.model';
import { pipe } from 'rxjs';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [DecimalPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnChanges {
  product = input<Product>({} as Product);

  ngOnChanges(): void {
    console.log('CardComponent - Product input changed:', this.product());
  }
}

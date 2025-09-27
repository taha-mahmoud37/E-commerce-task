import { Component, input, OnChanges, output, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  totalItems = input<number>(0);
  itemsPerPage = input<number>(10);
  totalPagesNumber = 0;
  currentPage = signal(1);
  pageChange = output<number>();

  pages: number[] = [];
  constructor() {
    console.log(this.pages);
    console.log(this.totalPagesNumber);
  }
  ngOnChanges(): void {
    this.totalPagesNumber = Math.ceil(this.totalItems() / this.itemsPerPage());
    this.pages = Array.from(
      { length: this.totalPagesNumber },
      (_, i) => i + 1
    );
  }
  updatePage(page: number) {
    this.currentPage.set(page);
    this.pageChange.emit(page);
  }
}

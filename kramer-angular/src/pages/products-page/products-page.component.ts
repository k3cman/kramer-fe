import {Component} from '@angular/core';
import {ProductsTableComponent} from './components/products-table.component';
import {ProductFilterComponent} from './components/product-filter.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductsTableComponent,
    ProductFilterComponent
  ],
  template: `
    <div class="flex w-full h-full pb-2">
      <div class="w-2/3">
        <app-products-table></app-products-table>
      </div>
      <div class="w-1/3">
        <app-product-filter></app-product-filter>
      </div>
    </div>
  `,
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {

}

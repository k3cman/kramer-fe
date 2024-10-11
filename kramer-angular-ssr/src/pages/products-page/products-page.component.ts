import {Component, inject, signal} from '@angular/core';
import {ProductsTableComponent} from './components/products-table.component';
import {ProductFilterComponent} from './components/product-filter.component';
import {Router} from '@angular/router';
import {ProductTestStore} from '../../core/store/product-test.store';

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
        <app-products-table [availableProducts]="availableProducts()"
                            [selectedProduct]="productTestStore.selectedProduct()"
                            (selectProduct)="selectProduct($event)"></app-products-table>
      </div>
      <div class="w-1/3">
        <app-product-filter (filter)="filterData($event)"></app-product-filter>
      </div>
    </div>
  `,
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  private router = inject(Router)
  readonly productTestStore = inject(ProductTestStore)
  availableProducts = signal([...this.productTestStore.availableProducts()])


  selectProduct(product: any) {
    this.productTestStore.selectProduct(product)
  }

  filterData(filterData: any) {
    console.log(filterData)
    if (filterData.productNo === '' && filterData.productName === '') {
      console.log('now')
      this.availableProducts.set(this.productTestStore.availableProducts());
      return
    }
    let filterResults: any[] = [];
    if (filterData.productNo && filterData.productNo !== '') {
      filterResults = [...this.productTestStore.availableProducts().filter(e => e.productNo.includes(filterData.productNo))]
    }
    if (filterData.productName && filterData.productName !== '') {
      filterResults = [...filterResults, ...this.productTestStore.availableProducts().filter(e => e.productName.includes(filterData.productName))]
    }
    const finalResults = [...new Set(filterResults)]
    this.availableProducts.set(finalResults)
  }
}

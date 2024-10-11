import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-products-table',
  template: `
    <div class="m-1.5 border-2 rounded border-gray-400 h-full">
      <div class="w-full bg-kramer h-[30px]">Product section</div>
      <div class="p-1.5">
        <div class="flex flex-col w-full">
          <div class="flex w-full h-[40px]">
            <div class="w-1/2 border-2 border-kramer">Product number</div>
            <div class="w-1/2 border-2 border-kramer">Product name</div>
          </div>
        </div>
        <div class="flex flex-col w-full" *ngFor="let product of availableProducts()"
             (click)="selectProduct.emit(product)">
          <div class="flex w-full h-[40px]" [ngClass]="{'bg-kramer-light': selectedProduct()?.id === product.id}">
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">{{ product.productNo }}</div>
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">{{ product.productName }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  availableProducts = input<any[]>([])
  selectedProduct = input<any | null>(null)
  selectProduct = output<any>()
}

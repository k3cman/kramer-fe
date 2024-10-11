import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ProductTestStore} from '../../../../core/store/product-test.store';

@Component({
  selector: 'page-container',
  template: `
    <div class="w-full h-full flex p-2">
      <div class="w-2/3 border-2 rounded border-gray-400">
        <div class="bg-kramer h-[30px] w-full">Enter container number</div>
        <p>Product:</p>
        <ng-container *ngIf="productTestStore.selectedProduct() as product">
          <p class="ml-2">{{ product.productNo }}</p>
          <p class="ml-4">{{ product.productName }}</p>
        </ng-container>

        <div class="border border-gray-400 m-1.5 flex flex-col">
          <div class="h-[40px] w-full border-b border-gray-400" routerLink="../new-container">[New Entry]</div>
          <div class="h-[40px] w-full border-b border-gray-400"
               *ngFor="let cn of productTestStore.availableContainerNumbers()"
               (click)="productTestStore.selectContainerNumber(cn)"
               [ngClass]="{'bg-kramer-light': productTestStore.selectedContainerNumber()?.id === cn.id}"
          >
            {{ cn.name }}
          </div>
        </div>
      </div>
      <div class="w-1/3 pl-1.5 flex-1 flex flex-col">
        <div class="border-gray-400 border-2 flex-1 mb-1 5 rounded">
          <div class="h-[30px] w-full bg-gray-400">Info</div>
          <p>Select container number</p>
        </div>
        <div class="flex h-[75px] w-full">
          <div class="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" routerLink="/">
            X
          </div>
          <div class="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
               routerLink="../set-number-of-tests">OK
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    NgClass
  ],
  standalone: true
})
export class ContainerPage {
  readonly productTestStore = inject(ProductTestStore)
}

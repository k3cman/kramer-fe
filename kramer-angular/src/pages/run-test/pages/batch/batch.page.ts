import {Component, inject, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ProductTestStore} from '../../../../core/store/product-test.store';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  standalone: true,
  template: `
    <div class="w-full h-full flex p-2">
      <div class="w-2/3 border-2 rounded border-gray-400">
        <div class="bg-kramer h-[30px] w-full">Enter batch number</div>
        <p>Product:</p>
        <ng-container *ngIf="productTestStore.selectedProduct() as product">
          <p class="ml-2">{{ product.productNo }}</p>
          <p class="ml-4">{{ product.productName }}</p>
        </ng-container>

        <div class="border border-gray-400 m-1.5 flex flex-col">
          <div class="h-[40px] w-full border-b border-gray-400">[New Entry]</div>
          <div class="h-[40px] w-full border-b border-gray-400"
               [ngClass]="{'bg-kramer-light': productTestStore.selectedBatch()?.id === batch.id}"
               *ngFor="let batch of productTestStore.availableBatches()" (click)="productTestStore.selectBatch(batch)">
            {{ batch.name }}
          </div>
        </div>
      </div>
      <div class="w-1/3 pl-1.5 flex-1 flex flex-col">
        @if (createBatch()) {
          <div class="border-kramer border-2 flex-1 mb-1.5 rounded">
            <div class="h-[30px] w-full text-white bg-kramer">Add container number</div>
            <p>Should a container number be added to the test</p>
          </div>
        } @else {
          <div class="border-gray-400 border-2 flex-1 mb-1 5 rounded">
            <div class="h-[30px] w-full bg-gray-400">Info</div>
            <p>Select batch</p>
          </div>
        }


        <div class="flex h-[75px] w-full">
          <div class="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" routerLink="/">
            X
          </div>
          <div class="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
               (click)="clickOk()">OK
          </div>
        </div>
      </div>
    </div>
  `,
  selector: 'page-batch',
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    NgClass
  ]
})
export class BatchPage {
  readonly productTestStore = inject(ProductTestStore)
  readonly router = inject(Router)
  createBatch = signal(false);

  clickOk() {
    if (this.createBatch() === false) {
      this.createBatch.set(true)
    } else {
      this.router.navigate(['run-test', 'container'])
    }
  }
}

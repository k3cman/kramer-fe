import {Injectable, signal, WritableSignal} from '@angular/core';
import {products} from '../dummy-data/products.data';
import {ProductBatches} from '../dummy-data/product-batches.data';

@Injectable({
  providedIn: 'root'
})
export class ProductTestStore {
  public availableProducts = signal(products)
  public selectedProduct: WritableSignal<any | null> = signal(null);
  public availableBatches = signal(ProductBatches)
  public selectedBatch: WritableSignal<any | null> = signal(null);
  public availableContainerNumbers = signal<any[]>([]);
  public selectedContainerNumber: WritableSignal<any | null> = signal(null)

  selectProduct(product: any) {
    this.selectedProduct.set(product)
  }

  selectBatch(batch: any) {
    this.selectedBatch.set(batch)
  }

  selectContainerNumber(containerNo: any) {
    this.selectedContainerNumber.set(containerNo)
  }

  addContainer(name: string) {
    this.availableContainerNumbers.update((data) => [...data, {name, id: name}])
  }

}

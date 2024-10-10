import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="w-full h-full flex flex-col pt-1.5 pr-1.5 pl-1.5">
      <div class="border-2 border-kramer rounded flex-1 mb-2">
        <div class="text-white bg-kramer w-full">Product filter</div>
        Use the filter to find a product
        <form [formGroup]="form" class="flex flex-col mx-1.5">
          <div class="flex flex-col">
            <label>Product number:</label>
            <input class="border border-gray-400 rounded" type="text"/>
          </div>
          <div class="flex flex-col">
            <label>Product name:</label>
            <input class="border border-gray-400 rounded" type="text"/>
          </div>
        </form>
      </div>
      <div class="flex h-[75px] w-full">
        <div class="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" routerLink="/">
          X
        </div>
        <div class="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
             routerLink="/run-test/calibration">OK
        </div>
      </div>
    </div>
  `,
  selector: 'app-product-filter',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ]
})
export class ProductFilterComponent {
  private _fb = inject(UntypedFormBuilder)
  public form = this._fb.group({
    number: '',
    name: ''
  })

}

import {ChangeDetectionStrategy, Component} from '@angular/core';

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

        <div class="flex flex-col w-full">
          <div class="flex w-full h-[40px]">
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product number</div>
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product name</div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex w-full h-[40px]">
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product number</div>
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product name</div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex w-full h-[40px]">
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product number</div>
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product name</div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex w-full h-[40px]">
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product number</div>
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product name</div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex w-full h-[40px]">
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product number</div>
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product name</div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex w-full h-[40px]">
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product number</div>
            <div class="w-1/2 border-[0.5px] border-t-0 border-kramer">Product name</div>
          </div>
        </div>
      </div>

    </div>

  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {

}

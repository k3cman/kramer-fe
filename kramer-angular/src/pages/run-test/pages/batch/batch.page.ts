import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  template: `
    <div class="w-full h-full flex p-2">
      <div class="w-2/3 border-2 rounded border-gray-400">
        <div class="bg-kramer h-[30px] w-full">Enter batch number</div>
        <p>Product:</p>
        <p class="ml-2">PrNUm1</p>
        <p class="ml-4">ProductTest1</p>

        <div class="border border-gray-400 m-1.5 flex flex-col">
          <div class="h-[40px] w-full border-b border-gray-400">[New Entry]</div>
          <div class="h-[40px] w-full border-b border-gray-400">TestBatch1</div>
          <div class="h-[40px] w-full border-b border-gray-400">TestBatch2</div>
        </div>
      </div>
      <div class="w-1/3 pl-1.5 flex-1 flex flex-col">
        <div class="border-gray-400 border-2 flex-1 mb-1 5 rounded">
          <div class="h-[30px] w-full bg-gray-400">Info</div>
          <p>Select batch</p>
        </div>
        <!--        <div class="border-kramer border-2 flex-1 mb-1.5 rounded">-->
        <!--          <div class="h-[30px] w-full text-white bg-kramer">Add container number</div>-->
        <!--          <p>Should a container number be added to the test</p>-->
        <!--        </div>-->
        <div class="flex h-[75px] w-full">
          <div class="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" routerLink="/">
            X
          </div>
          <div class="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
               routerLink="../batch">OK
          </div>
        </div>
      </div>
    </div>
  `,
  selector: 'page-batch',
  imports: [
    RouterLink
  ]
})
export class BatchPage {
}

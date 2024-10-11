import {Component, signal} from '@angular/core';
import {StartIconComponent} from '../../../../shared/icons/start-icon.component';

@Component({
  selector: 'app-tests-table',
  standalone: true,
  imports: [
    StartIconComponent
  ],
  template: `
    <div class="w-2/3 p-2">
      <div class="w-full h-[30px] bg-gray-300 text-center">
        START RECENTLY USED
      </div>
      @for (test of previousTests(); track test) {
        <div
          class="flex items-center pl-2 h-[50px] border border-r-2 border-l-2 border-gray-300">
          <app-start-icon color="#E5E7EB" size="28px" class="mr-2"></app-start-icon>
          <div class="flex flex-col">
            <span>{{ test.productNumber }} </span>
            <span>{{ test.testName }}</span>
          </div>
        </div>
      }
      <div class="w-full mt-1 flex justify-between">
        <div class="h-[75px] w-[125px] bg-kramer flex items-center justify-center">
          <app-start-icon color="white" size="36px" class="mr-2"></app-start-icon>
        </div>
        <div class="h-[75px] w-[125px] bg-kramer flex items-center justify-center">
          <app-start-icon color="white" size="36px" class="mr-2"></app-start-icon>
        </div>
        <div class="h-[75px] w-[125px] bg-kramer flex items-center justify-center">
          <app-start-icon color="white" size="36px" class="mr-2"></app-start-icon>
        </div>
        <div class="h-[75px] w-[125px] bg-kramer flex items-center justify-center">
          <app-start-icon color="white" size="36px" class="mr-2"></app-start-icon>
        </div>
      </div>
    </div>
  `,
  styleUrl: './tests-table.component.scss'
})
export class TestsTableComponent {
  previousTests = signal([
    {
      id: '1',
      productNumber: 'PrdNum1',
      testName: 'ProductTest1'
    },
    {
      id: '2',
      productNumber: 'PrdNum2',
      testName: 'ProductTest2'
    },
    {
      id: '3',
      productNumber: 'PrdNum3',
      testName: 'ProductTest3'
    },
    {
      id: '4',
      productNumber: 'PrdNum4',
      testName: 'ProductTest4'
    },
    {
      id: '5',
      productNumber: 'PrdNum5',
      testName: 'ProductTest5'
    }
  ])
}

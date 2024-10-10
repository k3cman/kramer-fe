import {Component, input, output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-measurement-card',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <div
      [ngClass]="{'border-kramer': measurement()?.checked}"
      class="w-[260px] h-[120px] border-2 rounded border-gray-300 m-[2px] flex flex-col"
      (click)="selected.emit(measurement()?.id)">
      <div class="h-full flex items-center px-2">
        <div class="mr-8 mt-6">
          <span class="block w-[22px] h-[22px] bg-gray-300 rounded-full"></span>
          <span>0/0</span>
        </div>
        <span class="text-5xl">{{ measurement() ? '0,00' : '0/0' }}</span>
      </div>
      <div [ngClass]="{'bg-kramer-light': measurement()?.checked, 'bg-gray-300': !measurement()?.checked}"
           class="w-full h-[40px]  flex items-center justify-center"><span
        class="uppercase mr-1">{{ measurement()?.name || '' }}</span>
        [{{ measurement()?.unit }}]
      </div>
    </div>
  `,
})
export class MeasurementCardComponent {
  measurement = input<any>()
  selected = output<string>()
}

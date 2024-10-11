import {Component, input, output, signal} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-measurement-card',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  template: `
    <div
      [ngClass]="{'border-kramer': measurement()?.checked}"
      class="w-[260px] h-[120px] border-2 rounded border-gray-300 m-[2px] flex flex-col"
      (click)="selected.emit(measurement()?.id)">
      <div class="h-full flex items-center px-2" *ngIf="measurement()">
        <div class="mr-8 mt-6" *ngIf="!editMode()">
          <span class="block w-[22px] h-[22px] bg-gray-300 rounded-full"></span>
          <span>0/0</span>
        </div>
        <span class="text-5xl" *ngIf="!editMode()">{{ measurement() ? '0,00' : '0/0' }}</span>
        <div class="w-full h-full flex items-center justify-between" *ngIf="editMode()">
          <div (click)="decrement()">
            <
          </div>
          <div class="text-5xl">{{ value() }}</div>
          <div (click)="increment()">
            >
          </div>
        </div>
      </div>
      <div [ngClass]="{'bg-kramer-light': measurement()?.checked, 'bg-gray-300': !measurement()?.checked}"
           *ngIf="measurement()"
           class=" w-full h-[40px] flex items-center justify-center
      "><span
        class="uppercase mr-1">{{ measurement()?.name || '' }}</span>
        [{{ measurement()?.unit }}]
      </div>
    </div>
  `,
})
export class MeasurementCardComponent {
  measurement = input<any>()
  editMode = input<any>(false)
  selected = output<string>()
  value = signal(Math.floor(Math.random() * 8) + 1)

  decrement() {
    this.value.update((value) => value - 1)
  }

  increment() {
    this.value.update((val) => val + 1)
  }
}

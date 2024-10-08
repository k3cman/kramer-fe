import {Component, input} from '@angular/core';
import {StartIconComponent} from '../../icons/start-icon.component';

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [
    StartIconComponent
  ],
  template: `
    <div class="w-[260px] h-[120px] border-2 rounded border-gray-300 m-[2px] flex flex-col">
      <div class="w-full h-[30px] pt-0.5 bg-kramer text-white uppercase text-center text-sm">
        {{ title() }}
      </div>
      <div class="flex items-center justify-center h-full">
        <app-start-icon></app-start-icon>
      </div>
    </div>
  `,
})
export class ActionCardComponent {
  title = input.required<string>()
}

import {Component, computed, signal, WritableSignal} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
    DatePipe
  ],
  template: `
    <div class="h-full w-screen bg-kramer-light flex justify-between items-center px-2 text-gray-600">
      <span>HOME</span>
      <span>{{ date() | date:'EEE dd.LL.y HH:mm:ss' }}</span>
    </div>
  `,
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  private currentDate: WritableSignal<Date> = signal(new Date());
  date = computed(() => this.currentDate())


  constructor() {
    setInterval(() => {
      this.currentDate.update(value => new Date())
    }, 1000)
  }
}

import {Component} from '@angular/core';
import {CustomIconComponent} from '../../icons/custom-icon.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CustomIconComponent,
    RouterLink
  ],
  template: `
    <div class="flex flex-col justify-between h-full pb-1.5 bg-white">
      <div class="w-[260px] h-[75px] text-white rounded bg-kramer m-[2px] flex items-center p-8" [routerLink]="'tests'">
        <app-custom-icon></app-custom-icon>
        <span class="ml-2 uppercase text-2xl">Tests</span>
      </div>
      <hr class="h-px bg-gray-200 border-0 dark:bg-kramer">
      <div class="w-[260px] h-[75px] text-white rounded bg-kramer m-[2px] flex items-center p-8">
        <app-custom-icon></app-custom-icon>
        <span class="ml-2 uppercase text-2xl">Report</span>
      </div>
      <hr class="h-px bg-gray-200 border-0 dark:bg-kramer">
      <div class="w-[260px] h-[75px] text-white rounded bg-kramer m-[2px] flex items-center p-8">
        <app-custom-icon></app-custom-icon>
        <span class="ml-2 uppercase text-2xl">Products</span>
      </div>
      <hr class="h-px bg-gray-200 border-0 dark:bg-kramer">
      <div class="w-[260px] h-[75px] text-white rounded bg-kramer m-[2px] flex items-center p-8">
        <app-custom-icon></app-custom-icon>
        <span class="ml-2 uppercase text-2xl">System</span>
      </div>
    </div>
  `,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}

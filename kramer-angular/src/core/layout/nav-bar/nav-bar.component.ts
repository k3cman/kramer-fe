import {Component, output} from '@angular/core';
import {UserIconComponent} from '../../../shared/icons/user-icon.component';
import {MenuIconComponent} from '../../../shared/icons/menu-icon.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    UserIconComponent,
    MenuIconComponent
  ],
  template: `
    <div class="h-full w-screen bg-kramer flex justify-between p-2 items-center">
      <div class="text-white text-2xl">
        <span class="font-bold">LAB.</span><span class="font-light">line</span>
      </div>
      <div class="flex">
        <app-user-icon></app-user-icon>
        <app-menu-icon (click)="toggleSidebar.emit()"></app-menu-icon>
      </div>
    </div>
  `,
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  toggleSidebar = output<void>()
}

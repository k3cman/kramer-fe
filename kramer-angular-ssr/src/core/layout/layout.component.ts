import {Component, inject} from '@angular/core';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {NgIf} from '@angular/common';
import {SidebarStore} from '../store/sidebar.store';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavBarComponent,
    BreadcrumbsComponent,
    NgIf,
    SidebarComponent
  ],
  template: `
    <div class="w-screen h-screen flex flex-col">
      <div class="h-[60px]">
        <app-nav-bar (toggleSidebar)="toggleSidebar()"></app-nav-bar>
      </div>
      <div class="h-[30px]">
        <app-breadcrumbs></app-breadcrumbs>
      </div>
      <div class="flex-1">
        <ng-content></ng-content>
        @if (sidebarStore.sidebarOpen()) {
          <div class="absolute right-0 top-[90px] h-[375px] w-1/3">
            <app-sidebar></app-sidebar>
          </div>
        }
      </div>
      <div class="h-[15px] bg-kramer w-screen"></div>
    </div>
  `,
})
export class LayoutComponent {
  sidebarStore = inject(SidebarStore);

  toggleSidebar() {
    this.sidebarStore.toggleSidebar()
  }
}

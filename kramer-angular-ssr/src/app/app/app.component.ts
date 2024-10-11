import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from '../core/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  template: `<main class="w-full h-full block">
    <app-layout>
        <router-outlet></router-outlet>
    </app-layout>
  </main>`,
})
export class AppComponent {
}

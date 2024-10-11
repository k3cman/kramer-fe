import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarStore {

  sidebarOpen = signal<boolean>(false)

  toggleSidebar() {
    this.sidebarOpen.update((data) => !data)
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-user-icon',
  standalone:true,
  template:`
    <svg class="text-white" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" color="white"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  `
})
export class UserIconComponent {}

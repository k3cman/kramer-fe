import {Component, input} from '@angular/core';

@Component({
  selector: 'app-start-icon',
  standalone: true,
  template: `
    <svg attr.width="{{size()}}" attr.height="{{size()}}" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg" attr.color="{{color()}}">
      <path
        d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z"
        attr.stroke="{{color()}}" stroke-width="1.5" attr.fill="{{color()}}" stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>`,
})
export class StartIconComponent {
  size = input<string>('60px')
  color = input<string>('#f78608')
}

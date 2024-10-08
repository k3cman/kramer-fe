import {Component} from '@angular/core';
import {TestsTableComponent} from './components/tests-table/tests-table.component';

@Component({
  selector: 'app-tests-page',
  standalone: true,
  imports: [
    TestsTableComponent
  ],
  template: `
    <app-tests-table></app-tests-table>
  `,
  styleUrl: './tests-page.component.scss'
})
export class TestsPageComponent {

}

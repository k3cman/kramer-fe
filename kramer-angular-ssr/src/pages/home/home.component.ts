import {Component, signal} from '@angular/core';
import {MeasurementCardComponent} from '../../shared/components/measurement-card/measurement-card.component';
import {ActionCardComponent} from '../../shared/components/action-card/action-card.component';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MeasurementCardComponent,
    ActionCardComponent,
    SidebarComponent,
    RouterLink
  ],
  template: `
    <div class="flex w-screen h-full justify-center">
      <div class="flex flex-col">
        <div class="flex">
          <app-measurement-card (selected)="selectMeasurement($event)"
                                [measurement]="listOfMeasurements()[0]"></app-measurement-card>
          <app-measurement-card (selected)="selectMeasurement($event)"
                                [measurement]="listOfMeasurements()[1]"></app-measurement-card>
        </div>
        <div class="flex">
          <app-measurement-card (selected)="selectMeasurement($event)"
                                [measurement]="listOfMeasurements()[2]"></app-measurement-card>
          <app-measurement-card (selected)="selectMeasurement($event)"
                                [measurement]="listOfMeasurements()[3]"></app-measurement-card>
        </div>
        <div class="flex">
          <app-measurement-card (selected)="selectMeasurement($event)"
                                [measurement]="listOfMeasurements()[4]"></app-measurement-card>
          <app-measurement-card></app-measurement-card>
        </div>
      </div>
      <div class="flex flex-col">
        <app-action-card title="Start quick test"></app-action-card>
        <app-action-card title="Start direct test"></app-action-card>
        <app-action-card title="Start product test" routerLink="products"></app-action-card>
      </div>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listOfMeasurements = signal([
    {
      id: '1',
      name: 'Weight',
      unit: 'g',
      checked: false
    },
    {
      id: '2',
      name: 'Thickness',
      unit: 'mm',
      checked: false
    },
    {
      id: '3',
      name: 'Width',
      unit: 'mm',
      checked: false
    },
    {
      id: '4',
      name: 'Height',
      unit: 'mm',
      checked: false
    },
    {
      id: '5',
      name: 'Hardness',
      unit: 'N',
      checked: false
    }
  ])

  selectMeasurement(id: string) {
    this.listOfMeasurements.update((data) => {
      return data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked
          }
        }

        return item;
      })
    })
  }
}

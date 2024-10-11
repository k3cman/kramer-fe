import {Component, signal} from '@angular/core';
import {ActionCardComponent} from '../../shared/components/action-card/action-card.component';
import {MeasurementCardComponent} from '../../shared/components/measurement-card/measurement-card.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'page-set-number-of-tests',
  template: `
    <div class="flex w-screen h-full justify-center">
      <div class="flex flex-col">
        <div class="flex">
          <app-measurement-card [editMode]="true"
                                [measurement]="listOfMeasurements()[0]"></app-measurement-card>
          <app-measurement-card [editMode]="true"
                                [measurement]="listOfMeasurements()[1]"></app-measurement-card>
        </div>
        <div class="flex">
          <app-measurement-card [editMode]="true"
                                [measurement]="listOfMeasurements()[2]"></app-measurement-card>
          <app-measurement-card [editMode]="true"
                                [measurement]="listOfMeasurements()[3]"></app-measurement-card>
        </div>
        <div class="flex">
          <app-measurement-card [editMode]="true"
                                [measurement]="listOfMeasurements()[4]"></app-measurement-card>
          <app-measurement-card></app-measurement-card>
        </div>
      </div>
      <div class="flex flex-col w-full p-1.5">
        <div class="rounded border-2 border-gray-400 flex flex-col flex-1 mb-2">
          <div class="h-[30px] bg-gray-400">Info</div>
          Set number of tests
        </div>
        <div class="flex h-[75px] w-full">
          <div class="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" routerLink="/">
            X
          </div>
          <div class="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
               routerLink="/run-test/test-in-progress">OK
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [
    ActionCardComponent,
    MeasurementCardComponent,
    RouterLink
  ],
  standalone: true
})
export class SetNumberOfTestsPage {

  listOfMeasurements = signal([
    {
      id: '1',
      name: 'Weight',
      unit: 'g',
      checked: true
    },
    {
      id: '2',
      name: 'Thickness',
      unit: 'mm',
      checked: true
    },
    {
      id: '3',
      name: 'Width',
      unit: 'mm',
      checked: true
    },
    {
      id: '4',
      name: 'Height',
      unit: 'mm',
      checked: true
    },
    {
      id: '5',
      name: 'Hardness',
      unit: 'N',
      checked: true
    }
  ])

}

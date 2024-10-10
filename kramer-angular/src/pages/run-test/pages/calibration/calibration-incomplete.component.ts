import {Component, signal} from '@angular/core';
import {ActionCardComponent} from '../../../../shared/components/action-card/action-card.component';
import {MeasurementCardComponent} from '../../../../shared/components/measurement-card/measurement-card.component';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
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
      <div class="flex flex-col w-1/3 mb-2">
        <div class="flex-1 w-full border-2 border-red-500 mb-2 rounded mt-2">
          <div class="bg-red-500 text-white w-full h-[30px]">Calibration incomplete</div>
          <p>
            The following calibration presets are defined but either never performed or already expired


          </p>
          <p>
            Preset: <strong>HardCal</strong>
          </p>
          <p> Do you want to continue anyway?</p>
        </div>
        <div class="flex h-[75px] w-full">
          <div class="flex items-center justify-center bg-kramer w-1/2 mr-2 text-2xl text-white" routerLink="/">
            X
          </div>
          <div class="flex items-center justify-center bg-kramer w-1/2 text-2xl text-white"
               routerLink="../batch">OK
          </div>
        </div>
      </div>
    </div>
  `,
  selector: 'page-calibration',
  imports: [
    ActionCardComponent,
    MeasurementCardComponent,
    RouterLink
  ]
})
export class CalibrationIncomplete {

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

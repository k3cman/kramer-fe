import {Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {TestsPageComponent} from '../pages/tests-page/tests-page.component';
import {ProductsPageComponent} from '../pages/products-page/products-page.component';
import {RunTestPage} from '../pages/run-test/run-test.page';
import {CalibrationIncomplete} from '../pages/run-test/pages/calibration/calibration-incomplete.component';
import {BatchPage} from '../pages/run-test/pages/batch/batch.page';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tests',
    component: TestsPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'run-test',
    component: RunTestPage,
    children: [
      {
        path: 'calibration',
        component: CalibrationIncomplete
      },
      {
        path: 'batch',
        component: BatchPage
      }
    ]
  }
];

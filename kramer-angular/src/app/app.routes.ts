import {Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {TestsPageComponent} from '../pages/tests-page/tests-page.component';
import {ProductsPageComponent} from '../pages/products-page/products-page.component';

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
  }
];

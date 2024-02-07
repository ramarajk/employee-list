import { Routes } from '@angular/router';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component'

export const routes: Routes = [

    { component: EmployeeGridComponent, path: '' },
    { component: EmployeeGridComponent, path: 'home' }
];

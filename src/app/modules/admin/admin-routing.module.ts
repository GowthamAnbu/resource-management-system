import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { CandiadatesComponent } from '../admin/components/candiadates/candiadates.component';
import { AdminComponent } from './admin.component';
import { EmployeesComponent } from './components/employees/employees.component';

/*
add the auth guard for all the children in the parent path
i.e to the path admin => doing this will resolve the login check
for admin and then sub admins and then candidate
*/
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'candidates',
        component: CandiadatesComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

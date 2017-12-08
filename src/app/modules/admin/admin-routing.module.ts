import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { CandiadatesComponent } from '../admin/components/candiadates/candiadates.component';

/*
add the auth guard for all the children in the parent path
i.e to the path admin => doing this will resolve the login check
for admin and then sub admins and then candidate
*/
const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'candidates',
        component: CandiadatesComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard-admin/dashboard-admin.component';
import { CandiadatesComponent } from './components/candiadates/candiadates.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../../material/material.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar-admin/navbar-admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  declarations: [DashboardComponent, CandiadatesComponent, AdminComponent, EmployeesComponent, NavbarComponent],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthService } from './shared/services/auth.service';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [Title, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

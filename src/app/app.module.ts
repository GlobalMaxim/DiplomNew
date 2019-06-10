import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeItemComponent} from './employee/employee-list/employee-item/employee-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MetricsComponent } from './metrics/metrics.component';
import { MetricListComponent } from './metrics/metric-list/metric-list.component';
import { MetricItemComponent } from './metrics/metric-list/metric-item/metric-item.component';
import {MatIconModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeItemComponent,
    MetricsComponent,
    MetricListComponent,
    MetricItemComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

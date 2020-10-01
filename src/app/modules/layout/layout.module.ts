import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from '../../Components/layout/layout.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ServicesComponent } from '../../components/services/services.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../../Components/footer/footer.component';
import { TopbarComponent } from '../../Components/topbar/topbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent, ServicesComponent, FooterComponent, TopbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from '../../Components/layout/layout.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { FooterComponent } from '../../components/footer/footer.component';



@NgModule({
  declarations: [LayoutComponent, DashboardComponent, TopbarComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }

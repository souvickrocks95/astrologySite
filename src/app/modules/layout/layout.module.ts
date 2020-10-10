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
import { HighlightMenuDirective } from 'src/app/directives/highlight-menu.directive';
import { ContactComponent } from '../../components/contact/contact.component';
import { ReviewComponent } from '../../components/review/review.component';


@NgModule({
  declarations: [TopbarComponent, FooterComponent, LayoutComponent, DashboardComponent, ServicesComponent, HighlightMenuDirective, ContactComponent, ReviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class LayoutModule { }

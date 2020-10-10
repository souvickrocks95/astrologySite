import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { FaqComponent } from 'src/app/Components/faq/faq.component';
import { ReviewComponent } from 'src/app/components/review/review.component';
import { LayoutComponent } from '../../Components/layout/layout.component';
import { ServicesComponent } from '../../components/services/services.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'home', component: DashboardComponent
    },
    {
      path: 'service', component: ServicesComponent
    },
    {
      path: 'faq', component: FaqComponent
    },
    {
      path: 'review', component: ReviewComponent
    },
    {
      path: 'contact', component: ContactComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

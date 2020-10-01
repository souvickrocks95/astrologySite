import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/Components/layout/layout.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { ServicesComponent } from 'src/components/services/services.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {
      path: '', redirectTo: 'services', pathMatch: 'full'
    },
    {
      path: 'services', component: ServicesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/Components/layout/layout.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {
      path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
      path: 'dashboard', component: DashboardComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

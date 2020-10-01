import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../Components/layout/layout.component';
import { ServicesComponent } from '../../components/services/services.component';


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

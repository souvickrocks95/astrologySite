import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/Components/layout/layout.component';


const routes: Routes = [{
    path: '', pathMatch: 'full', redirectTo: 'layout'
  },
  {
    path: 'layout',
    loadChildren: () => import('../modules/layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

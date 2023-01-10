import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RandompageComponent } from './randompage/randompage.component';

const routes: Routes = [
  {
    path:'',redirectTo:'random/admin',pathMatch:'full'

  },
  {
    path:'random/admin',component:DashboardComponent
  },
  {
    path:'random/rand',component:RandompageComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

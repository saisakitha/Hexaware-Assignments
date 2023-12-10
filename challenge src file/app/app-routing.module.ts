import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './component/player/player.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FindbynameComponent } from './findbyname/findbyname.component';


const routes: Routes = [
  {path:'add',component:PlayerComponent},
  {path:'find',component:FindbynameComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

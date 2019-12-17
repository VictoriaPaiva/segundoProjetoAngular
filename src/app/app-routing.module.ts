import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { AcDcComponent } from './ac-dc/ac-dc.component';
import { IronComponent } from './iron/iron.component';
import { MetallicaComponent } from './metallica/metallica.component';
import { PinkFComponent } from './pink-f/pink-f.component';
import { QueenComponent } from './queen/queen.component';
import { RedComponent } from './red/red.component';

const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: "full"},
  {path: 'home' , component: HomeComponent},
  {path: 'tarefas' , component: TarefasComponent},
  {path:'acdc',component:AcDcComponent},
  {path:'ironM',component:IronComponent},
  {path:'metallica',component:MetallicaComponent},
  {path:'pinkFloyd',component:PinkFComponent},
  {path:'queen',component:QueenComponent},
  {path:'red',component:RedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

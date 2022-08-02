import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/Cart/Cart.component';
import { CourseComponent } from './Components/Course/Course.component';
import { HomeComponent } from './Components/Home/Home.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    { path:'Home',component:HomeComponent},
    { path:'Course',component:CourseComponent},
    { path:'Cart',component:CartComponent},
    

  ]},
  
{ path:'**',component:NotFoundComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

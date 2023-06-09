import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

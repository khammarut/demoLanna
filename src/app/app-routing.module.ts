import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from '../app/user-page/user-page.component';
import { MiddleUserPageComponent } from '../app/middle-user-page/middle-user-page.component';
import { LoginPageComponent } from '../app/login-page/login-page.component';
import { FormInputComponent } from '../app/form/form-input/form-input.component';
import { ProjectappComponent } from '../app/projectapp/projectapp.component';
import { UpdateprojectappComponent } from '../app/updateprojectapp/updateprojectapp.component';
import { AdminComponent } from '../app/admin/admin.component';
import { DisplayformComponent } from '../app/displayform/displayform.component';

const routes: Routes = [
  {
    path : '' , component : LoginPageComponent
  },
  {
    path : 'user' , component : UserPageComponent
  },
  {
    path : 'middleuser' , component : MiddleUserPageComponent
  },
  {
    path : 'inputform' , component : FormInputComponent
  },
  {
    path : 'inputprojectapprove' , component : ProjectappComponent
  },
  {
    path : 'updateprojectapprove' , component : UpdateprojectappComponent
  },
  {
    path: 'admin' , component : AdminComponent
  },
  {
    path: 'displayform' , component : DisplayformComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

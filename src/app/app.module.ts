import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddleUserPageComponent } from './middle-user-page/middle-user-page.component';
import { UserPageComponent } from './user-page/user-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormInputComponent } from './form/form-input/form-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import { InputdesComponent } from './form/inputdes/inputdes.component';
import { InputoutComponent } from './form/inputout/inputout.component';
import { InputoutcomeComponent } from './form/inputoutcome/inputoutcome.component';
import { InputbudgetComponent } from './form/inputbudget/inputbudget.component';
import { InputdesbudgetComponent } from './form/inputdesbudget/inputdesbudget.component';
import { InputlastbudgetComponent } from './form/inputlastbudget/inputlastbudget.component';
import { InsertriskComponent } from './form/insertrisk/insertrisk.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProjectappComponent } from './projectapp/projectapp.component';
import { UpdateprojectappComponent } from './updateprojectapp/updateprojectapp.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AdminComponent } from './admin/admin.component';
import { InputstepComponent } from './form/inputstep/inputstep.component';
import { UpdatebudgetComponent } from './form/updatebudget/updatebudget.component';
import { UpdatedesComponent } from './form/updatedes/updatedes.component';
import { UpdatedesbudgetComponent } from './form/updatedesbudget/updatedesbudget.component';
import { UpdatelastbudgetComponent } from './form/updatelastbudget/updatelastbudget.component';
import { UpdateoutComponent } from './form/updateout/updateout.component';
import { UpdatoutcomComponent } from './form/updatoutcom/updatoutcom.component';
import { UpdatstepComponent } from './form/updatstep/updatstep.component';
import { UpdatriskComponent } from './form/updatrisk/updatrisk.component';
import { ProjectComponent } from './project/project.component';
import { DisplayformComponent } from './displayform/displayform.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { ExportDirective } from './_directives/export.directive';
import { MiddleComponent } from './middle/middle.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddleUserPageComponent,
    UserPageComponent,
    LoginPageComponent,
    FormInputComponent,
    InputdesComponent,
    InputoutComponent,
    InputoutcomeComponent,
    InputbudgetComponent,
    InputdesbudgetComponent,
    InputlastbudgetComponent,
    InsertriskComponent,
    ProjectappComponent,
    UpdateprojectappComponent,
    AdminComponent,
    InputstepComponent,
    UpdatebudgetComponent,
    UpdatedesComponent,
    UpdatedesbudgetComponent,
    UpdatelastbudgetComponent,
    UpdateoutComponent,
    UpdatoutcomComponent,
    UpdatstepComponent,
    UpdatriskComponent,
    ProjectComponent,
    DisplayformComponent,
    ExportDirective,
    MiddleComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule }  from '@angular/material/button';
import { MatDividerModule }  from '@angular/material/divider';
import { MatIconModule }  from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';
import { MatListModule }  from '@angular/material/list';
import { MatCardModule }  from '@angular/material/card';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';

// Pour le router
import { Routes, RouterModule } from '@angular/router';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { FooterComponent } from './aside/footer/footer.component';
import { HeaderComponent } from './aside/header/header.component';
import { LeftSidebarComponent } from './aside/left-sidebar/left-sidebar.component';
import { ModalHeaderComponent } from './aside/modal-header/modal-header.component';
import { ToolbarComponent } from './aside/toolbar/toolbar.component';
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';
import {ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';

import {CalendarModule} from 'primeng/calendar';
import { MatTabsModule } from '@angular/material/tabs';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import {TooltipModule} from 'primeng/tooltip';
import {SliderModule} from 'primeng/slider';
import {RatingModule} from 'primeng/rating';
import {InputMaskModule} from 'primeng/inputmask';
//prime ng 
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {BadgeModule} from 'primeng/badge';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';

const routes:Routes = [
  {
    path: "",
    component:AssignmentsComponent,
  },
  {
    path: "home",
    component:AssignmentsComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "add",
    component:AddAssignmentComponent
  },
  {
    path: "assignment/:id",
    component:AssignmentDetailComponent
  },
  {
    path: "assignment/:id/edit",
    component:EditAssignmentComponent,
    canActivate:[AuthGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    FooterComponent,
    HeaderComponent,
    LeftSidebarComponent,
    ModalHeaderComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng9PasswordStrengthBarModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    PanelMenuModule,
    DialogModule,
    TooltipModule,
    SliderModule,
    InputNumberModule,
    RatingModule,
    RadioButtonModule,
    InputMaskModule,
    CalendarModule,CardModule,BadgeModule,BreadcrumbModule,InputTextModule,
    
    MatButtonModule, MatDividerModule, MatIconModule,ReactiveFormsModule,
    FormsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule,
    MatListModule, MatCardModule, MatCheckboxModule, MatTableModule,
    MatNativeDateModule, MatSlideToggleModule, HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({positionClass: 'toast-top-center'})
  ],
  providers: [
   ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

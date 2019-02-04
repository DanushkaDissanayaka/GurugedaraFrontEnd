import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule} from '@agm/core';
//import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StudentComponent } from './register-user/student/student.component';
import { TeacherComponent } from './register-user/teacher/teacher.component';
import { OfficeUserComponent } from './register-user/office-user/office-user.component';
import { AdminComponent } from './register-user/admin/admin.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { EnterPaymentsComponent } from './enter-payments/enter-payments.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditPaymentsComponent } from './enter-payments/edit-payments/edit-payments.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
    
    LoginComponent,
    RegisterComponent,
   
    //ChangePasswordComponent,
    //SendMessageComponent,
  
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

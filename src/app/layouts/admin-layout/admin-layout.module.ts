import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegisterUserComponent } from '../../register-user/register-user.component';
import { StudentComponent } from '../../register-user/student/student.component';
import { TeacherComponent } from '../../register-user/teacher/teacher.component';
import { OfficeUserComponent } from '../../register-user/office-user/office-user.component';
import { AdminComponent } from '../../register-user/admin/admin.component';
import { ClassCoordinationComponent } from '../../class-coordination/class-coordination.component';
import { AddclassComponent } from '../../class-coordination/addclass/addclass.component';
import { AddlocationComponent } from '../../class-coordination/addlocation/addlocation.component';
import { AdddeviceComponent } from '../../class-coordination/adddevice/adddevice.component';
import { AddsubjectComponent } from '../../class-coordination/addsubject/addsubject.component';
import { MarksComponent } from '../../marks/marks.component';
import { AttendanceComponent } from '../../attendance/attendance.component';
import { PaymentsComponent } from '../../payments/payments.component';
import { AddmarksComponent } from '../../marks/addmarks/addmarks.component';
import { ViewmarksComponent } from '../../marks/viewmarks/viewmarks.component';
import { AddNotificationComponent } from '../../add-notification/add-notification.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RegisterUserComponent,
    StudentComponent,
    OfficeUserComponent,
    TeacherComponent,
    AdminComponent,
    ClassCoordinationComponent,
    AddclassComponent,
    AddlocationComponent,
    AdddeviceComponent,
    AddsubjectComponent,
    MarksComponent,
    AttendanceComponent,
    PaymentsComponent,
    AddmarksComponent,
    ViewmarksComponent,
    AddNotificationComponent,
  ]
})

export class AdminLayoutModule {}

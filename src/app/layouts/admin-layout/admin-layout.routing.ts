import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegisterUserComponent } from '../../register-user/register-user.component';
import { AttendanceComponent } from '../../attendance/attendance.component';
import { PaymentsComponent } from '../../payments/payments.component';
import { MarksComponent } from '../../marks/marks.component';
import { ClassCoordinationComponent } from '../../class-coordination/class-coordination.component';
import { AddNotificationComponent } from '../../add-notification/add-notification.component';
import { ViewStudentDetailsComponent } from '../../view-student-details/view-student-details.component';
import { EvaluationComponent } from '../../evaluation/evaluation.component';
import { TimetableComponent } from '../../timetable/timetable.component';
import { EnterPaymentsComponent } from '../../enter-payments/enter-payments.component';
import { EnrollStudentComponent } from '../../enroll-student/enroll-student.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'registerUser',     component: RegisterUserComponent},

    { path: 'attendance',     component: AttendanceComponent},
    { path: 'viewpayment',     component: PaymentsComponent},
    { path: 'marks',     component: MarksComponent},
    { path: 'classCoordination',     component: ClassCoordinationComponent},
    { path: 'addNotification',     component: AddNotificationComponent},
    { path: 'viewStudentDetails',  component:  ViewStudentDetailsComponent},
    { path: 'evaluation',     component: EvaluationComponent},
    { path: 'timetable',     component: TimetableComponent},
    { path: 'EnterPayments',     component: EnterPaymentsComponent },
    { path: 'EnrollStudent',     component: EnrollStudentComponent },

];

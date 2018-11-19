import { Routes, RouterModule} from '@angular/router';
import { LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseListComponent} from './course-list/course-list.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile/:userId', component: ProfileComponent},
  { path: 'courses', component: CourseListComponent}
];
export const routing = RouterModule.forRoot(appRoutes);

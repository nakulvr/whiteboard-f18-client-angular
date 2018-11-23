import { Routes, RouterModule} from '@angular/router';
import { LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseListComponent} from './course-list/course-list.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
  // { path: 'profile/:userId', component: ProfileComponent},
  // { path: 'courses', component: CourseListComponent}
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget/:widgetId', component: CourseViewerComponent},
  {path: '**', component: WhiteBoardComponent}
];
export const routing = RouterModule.forRoot(appRoutes);

import {Routes} from '@angular/router';
import {StudentComponent} from "./student/student.component";

export const routes: Routes = [
  {path: '', redirectTo: '/student-management', pathMatch: "full"},
  {path: 'student-management', component: StudentComponent}
];

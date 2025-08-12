import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CourseTableComponent } from './courseTable.component';
import { CourseEditorComponent } from './courseEditor.component';
import { EnrolledTableComponent } from './enrolledTable.component';
import { AuthComponent } from './authComponent';

let routing = RouterModule.forChild([
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main',
    component: AdminComponent,
    children: [
      {
        path: 'courses/:x/:y',
        component: CourseEditorComponent,
      },
      {
        path: 'courses/:x',
        component: CourseEditorComponent,
      },
      {
        path: 'courses',
        component: CourseTableComponent,
      },
      {
        path: 'enrolled',
        component: EnrolledTableComponent,
      },
      { path: '**', redirectTo: 'courses' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing], // Dependency Modules
  providers: [],
  declarations: [
    AuthComponent,
    AdminComponent,
    CourseTableComponent,
    CourseEditorComponent,
    EnrolledTableComponent,
  ],
})
export class AdminModule {} // lazy loaded.

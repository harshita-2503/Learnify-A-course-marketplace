import { Courses } from './courses.model';
import { NgModule } from '@angular/core';
import { CoursesRepository } from './courses.repository';
import { Enrolled } from './Enrolled.model';
import { EnrolledRepository } from './Enrolled.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [CoursesRepository, Enrolled, EnrolledRepository, RestDataSource],
})
export class ModelModule {}

// services are called as shared(by nature)

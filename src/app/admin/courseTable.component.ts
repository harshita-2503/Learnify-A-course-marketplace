import { Component } from '@angular/core';
import { Courses } from '../model/courses.model';
import { CoursesRepository } from '../model/courses.repository';

@Component({
  selector: 'productTableComponent',
  templateUrl: 'courseTable.component.html',
  styleUrls: ['courseTable.component.css'],
})
export class CourseTableComponent {
  constructor(private repository: CoursesRepository) {}

  getCourses(): Courses[] {
    return this.repository.getCourses();
  }

  deleteCourse(id?: number) {
    // 1
    this.repository.deleteCourse(id);
  }
}

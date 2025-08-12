import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Courses } from '../model/courses.model';
import { CoursesRepository } from '../model/courses.repository';

@Component({
  selector: 'productEditorComponent',
  templateUrl: 'courseEditor.component.html',
  styleUrls: ['courseEditor.component.css'],
})
export class CourseEditorComponent {
  editing: boolean = false;
  product: Courses = new Courses(); // stores info for 1st record

  constructor(
    private repository: CoursesRepository,
    private router: Router,
    activeRoute: ActivatedRoute,
  ) {
    this.editing =
      activeRoute.snapshot.params['x'] == 'edit'; // true

    if (this.editing) {
      Object.assign(
        this.product,
        repository.getCourse(
          activeRoute.snapshot.params['y'],
        ),
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveCourse(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}

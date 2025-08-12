import { Injectable } from '@angular/core';
import { Courses } from './courses.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class CoursesRepository {
  private courses: Courses[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  getCourses(category?: string): Courses[] {
    return this.courses.filter(
      (p) => category == undefined || category == p.category,
    );
  }

  getCourse(id: number): Courses | undefined {
    return this.courses.find((p) => p.id == id);
  }

  saveCourse(product: Courses) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveCourses(product)
        .subscribe((p) => this.courses.push(p));
    } else {
      this.dataSource.updateCourses(product).subscribe((p) => {
        this.courses.splice(
          this.courses.findIndex((p) => p.id == product.id),
          1,
          product,
        );
      });
    }
  }

  deleteCourse(id?: number) {
    this.dataSource.deleteCourses(id).subscribe((p) => {
      this.courses.splice(
        this.courses.findIndex((p) => p.id == id),
        1,
      );
    });
  }
}

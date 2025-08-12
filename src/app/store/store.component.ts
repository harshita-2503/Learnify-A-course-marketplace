import { Component } from '@angular/core';
import { Courses } from '../model/courses.model';
import { CoursesRepository } from '../model/courses.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
  styleUrls: ['store.component.css'],
})
export class StoreComponent {
  constructor(private repository: CoursesRepository, private router: Router) {}

  get products(): Courses[] {
    return this.repository.getCourses();
  }
  scrollToCourses() {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  addProductToCart(product: Courses) {
    this.router.navigateByUrl('/cart');
  }
}

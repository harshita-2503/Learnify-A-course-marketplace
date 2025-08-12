import { Component } from '@angular/core';
import { EnrolledRepository } from '../model/Enrolled.repository';
import { Enrolled } from '../model/Enrolled.model';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../model/courses.model';
import { CoursesRepository } from '../model/courses.repository';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  course: Courses = new Courses();
  checkout: boolean = false;
  editing?: number = undefined;

  data?: any;

  errorMessage: any;

  constructor(
    public repository: CoursesRepository,
    public orderRepo: EnrolledRepository,
    public order: Enrolled,
    activeRoute: ActivatedRoute,
  ) {
    this.editing = activeRoute.snapshot.params['x'];
    console.log(this.editing);

    if (this.editing != undefined) {
      Object.assign(this.course, repository.getCourse(this.editing));

      console.log(this.course);
    }
  }

  submitOrder(form: any) {
    this.order.course = this.course;

    this.submitted = true;
    if (form.valid) {
      this.orderRepo.saveEnrolled(this.order).subscribe({
        next: (order) => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
          console.log(order);
        },

        error: (error) => {
          console.error('error caught in component');
          this.errorMessage = error;
          console.log(this.errorMessage);
        },
        complete: () => {
          console.error('post operation is done');
        },
      });
    }
  }
}

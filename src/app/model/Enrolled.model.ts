import { Injectable } from '@angular/core';
import { Courses } from './courses.model';

@Injectable()
export class Enrolled {
  public id?: number;
  public name?: string;
  public email?: string;
  public phoneNo?: string;
  public course?: Courses;
  public country?: string;
  public courseId?: number;

  clear() {
    this.id = undefined;
    this.name = this.email = this.phoneNo = undefined;
    this.course = undefined;
    this.courseId = undefined;
  }
}

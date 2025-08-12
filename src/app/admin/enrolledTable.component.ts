import { Component } from '@angular/core';
import { Enrolled } from '../model/Enrolled.model';
import { EnrolledRepository } from '../model/Enrolled.repository';

@Component({
  selector: 'orderTableComponent',
  templateUrl: 'enrolledTable.component.html',
  styleUrls: ['enrolledTable.component.css'],
})
export class EnrolledTableComponent {
  includeShipped = false;

  constructor(private repository: EnrolledRepository) {}

  getOrders(): Enrolled[] {
    return this.repository.getEnrolled();
  }

  delete(id?: number) {
    this.repository.deleteEnrolled(id);
  }
}

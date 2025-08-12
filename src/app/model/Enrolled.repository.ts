import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrolled } from './Enrolled.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class EnrolledRepository {
  private orders: Enrolled[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: RestDataSource) {}

  loadEnrolled() {
    this.loaded = true;
    this.dataSource.getEnrolled().subscribe((orders) => (this.orders = orders));
  }

  getEnrolled(): Enrolled[] {
    if (!this.loaded) {
      this.loadEnrolled();
    }
    return this.orders;
  }

  saveEnrolled(order: Enrolled): Observable<Enrolled> {
    return this.dataSource.saveEnrolled(order);
  }

  updateEnrolled(order: Enrolled) {
    this.dataSource.updateEnrolled(order).subscribe((order) => {
      this.orders.splice(
        this.orders.findIndex((o) => o.id == order.id),
        1,
        order,
      );
    });
  }

  deleteEnrolled(id?: number) {
    this.dataSource.deleteEnrolled(id).subscribe((order) => {
      this.orders.splice(this.orders.findIndex((o) => id == o.id));
    });
  }
}

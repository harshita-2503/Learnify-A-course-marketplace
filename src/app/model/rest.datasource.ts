import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Courses } from './courses.model';
import { Enrolled } from './Enrolled.model';

const PROTOCOL = 'http';
const PORT = 4000;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    // this.baseUrl = '/api/';
  }

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.baseUrl + 'courses');
  }

  saveEnrolled(Enrolled: Enrolled): Observable<Enrolled> {
    return this.http.post<Enrolled>(this.baseUrl + 'Enrolled', Enrolled);
  }

  saveCourses(course: Courses): Observable<Courses> {
    return this.http.post<Courses>(this.baseUrl + 'courses', course);
  }

  updateCourses(course: Courses): Observable<Courses> {
    return this.http.put<Courses>(
      `${this.baseUrl}courses/${course.id}`,
      course,
    );
  }

  deleteCourses(id?: number): Observable<Courses> {
    return this.http.delete<Courses>(`${this.baseUrl}courses/${id}`);
  }

  getEnrolled(): Observable<Enrolled[]> {
    return this.http.get<Enrolled[]>(this.baseUrl + 'Enrolled');
  }

  deleteEnrolled(id?: number): Observable<Enrolled> {
    return this.http.delete<Enrolled>(`${this.baseUrl}Enrolled/${id}`);
  }

  updateEnrolled(Enrolled: Enrolled): Observable<Enrolled> {
    return this.http.put<Enrolled>(
      `${this.baseUrl}courses/${Enrolled.id}`,
      Enrolled,
    );
  }
}

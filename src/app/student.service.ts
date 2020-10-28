import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  [x: string]: any;

  constructor(private http: HttpClient) {
  }


  // get url: /assets/students.mock.json
  getStudents(): Observable<Student[]>  {
    return this.http.get<Student[]>('/assets/students.mock.json');
  }

  // get url: /assets/student{id}.mock.json
  getStudent(id: number): Observable<Student>  {
    if (id > 0) {
      return this.http.get<Student>(`/assets/student${id}.mock.json`)
      .pipe(
        catchError(this.handleError)
      );
    } else {
      throw new Error('Not Found');
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured: ', error.error.message);
    } else {
      console.error(
        `error status code: ${error.status}, body: ${error.error}`
      );
    }
    return throwError('Something wrong happened')
  }
}

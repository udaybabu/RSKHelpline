import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { studentData } from './studentinterface'
import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators'
// import path from '../../assets/Data/student.json'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "../../assets/Data/student.json"
  constructor(private http: HttpClient) { }
  getStudents() {
    return [
      {"name":"uday","place":"piler"},
      {"name":"kumar","place":"tirupathi"},
      {"name":"sai","place":"kadapa"},
      {"name":"naveen","place":"hyderabad"}
    ]
  }
  
  getStudentData():Observable<studentData> {
    return this.http.get<studentData>(this.url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

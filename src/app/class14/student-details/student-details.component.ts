import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-details',
  template: `
    <h3>
      student-details works!
    </h3>
    <ul *ngFor="let student of studentList">
     <li>{{student.name}}---{{student.place}}</li>
    </ul>
    <p>{{error}}</p>
  `,
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {

  studentList:any = []
  error = '';
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
   // this.studentList = this.studentService.getStudents();
   this.studentService.getStudentData().subscribe(res => this.studentList = res.data,
    error => this.error = error)
   let age = 18
        var promis = new Promise<string>((resolve,reject) => {
            if(age>=18){
              resolve('Person eligible for vote');
            } else {
              reject("Person not eligible for vote");
            }
        })
        promis.then(req => {
          console.log(req);
        }).catch(error => {
            console.log(error);
        }).finally(() =>{
           console.log('This is fianlly');
        })

        var obse = new Observable(data => {
          setTimeout(() => {
            data.next('HelloWorld');
            data.complete();
          },5000);
        })

        obse.subscribe(res => {
          console.log("Response is:",res);
         
        }, (error) => {
          console.log("Error is:",error.error.message);  
        })

  }

}

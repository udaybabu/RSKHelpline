import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <h2>
      student-list works!
    </h2>
    <ul *ngFor="let student of studentList">
      <li>{{student.name}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class StudentListComponent implements OnInit {

  studentList:any = []
  constructor(private studentService:StudentService) { 

  }

  ngOnInit(): void {
   // this.studentList = this.studentService.getStudents();
    this.studentService.getStudentData().subscribe(res => this.studentList = res.data)
  }

}

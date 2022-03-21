import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { delay, first, Observable, tap } from 'rxjs';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    //this.coursesService = new CoursesService;
    this.courses$ = this.coursesService.list().pipe(
      first(),
      delay(3000),
      tap(courses => console.log(courses)));
  }

  ngOnInit(): void {
  }

}

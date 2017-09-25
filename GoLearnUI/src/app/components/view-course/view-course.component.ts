import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { Module } from '../../models/module';
import { CourseManagerService } from '../../services/course-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
})
export class ViewCourseComponent implements OnInit {

   courses: Course[];
   responseArgs = {
     msg: '',
     isLoading: true
   };

   constructor(courseManagerService: CourseManagerService, private route: ActivatedRoute) {
   }

   ngOnInit() {
    this.extractData(this.route.snapshot.data['courses']);   
   }

   private extractData(res) {
    this.courses = JSON.parse(res._body);
    this.responseArgs.isLoading = false;
   }

   private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    this.responseArgs.msg = error.message;
    this.responseArgs.isLoading = false;
    setTimeout(() => {
      this.responseArgs.msg = '';
    }, 2000);
    return Observable.throw(error.message || error);
  }

}

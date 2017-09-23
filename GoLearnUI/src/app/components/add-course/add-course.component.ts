import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../models/course';
import { Module } from '../../models/module';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EnvironmentManagerService } from '../../services/environment-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  private course: Course = new Course();
  responseArgs = {
    msg: '',
    isLoading: false
  };

  @ViewChild('modules')
  private modules: ElementRef;

  constructor(private http: Http, private envManager: EnvironmentManagerService) {
  }

  ngOnInit() {
  }

  addModule() {
    this.course.modules.push(new Module());

    var element = document.getElementById("modules");
    element.scrollTop = element.scrollHeight;
  }

  removeModule(moduleName: string) {
    this.course.modules.forEach((module) => {
      if (module.name === moduleName) {
        const index = this.course.modules.indexOf(module, 0);
        this.course.modules.splice(index, 1);
      }
    });
  }

  addCourse() {
    this.responseArgs.isLoading = true;
    const env = this.envManager.env;
    this.http.post(env.contextPath + env.courseApi.addCourse, this.course).toPromise()
      .then(res => {
        console.log(res.json());
        this.responseArgs.msg = 'Course Added Successfully...!';
        setTimeout(() => {
          this.responseArgs.msg = '';
        }, 2000);
        this.responseArgs.isLoading = false;
      }).catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    setTimeout(() => {
      this.responseArgs.msg = error.message;
    }, 2000);
    return Observable.throw(error.message || error);
  }
}

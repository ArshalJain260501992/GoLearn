import { Injectable } from '@angular/core';
import { Course } from '../models/course'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { EnvironmentManagerService } from '../services/environment-manager.service';

@Injectable()
export class CourseManagerService {

  courses: Course[] = [];
  env;

  constructor(private http: Http, private envManager: EnvironmentManagerService) {
    this.env = this.envManager.env;
  }

  public getAllCourses(): Observable<any>{
    return this.http.get(this.env.contextPath + this.env.courseApi.listAllCourses);
  }

}

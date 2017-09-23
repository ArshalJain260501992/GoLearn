import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Course} from '../../models/course';
import { Observable } from 'rxjs';
import { CourseManagerService } from '../course-manager.service';

@Injectable()
export class ViewCoursesResolverService implements Resolve<Course[]>{

  constructor(private courseManagerService: CourseManagerService) { }

  resolve(route: ActivatedRouteSnapshot): any {
    return this.courseManagerService.getAllCourses();
  }
}

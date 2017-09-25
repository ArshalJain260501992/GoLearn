import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { EnvironmentManagerService } from './services/environment-manager.service';
import { ViewCoursesResolverService } from './services/resolvers/view-courses-resolver.service';
import { CourseManagerService } from './services/course-manager.service';

const appRoutes: Routes = [
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'viewCourses', component: ViewCourseComponent, resolve: {
    courses: ViewCoursesResolverService
  } },
  { path: '**', redirectTo: 'addCourse' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true } // <-- debugging purposes only
    ),
  ],
  providers: [
    EnvironmentManagerService,
    CourseManagerService,
    ViewCoursesResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

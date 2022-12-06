import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewCourseComponent } from './view-course/view-course.component';
import { HttpClientModule } from '@angular/common/http'

 
const myroute :Routes=[
  {
    path:"",
    component:AddCourseComponent

  },
  {
    path:"view",
    component:ViewCourseComponent

  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    NavbarComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

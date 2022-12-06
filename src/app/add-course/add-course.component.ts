import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle=""
  courseDescription=""
  courseVenue=""
  courseDuration=""
  CourseDate=""

  readValue=()=>{
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseVenue":this.courseVenue,"courseDuration":this.courseDuration,"CourseDate":this.CourseDate}
  console.log(data)
  }

}

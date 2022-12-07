import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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
  courseDate=""
  constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseVenue":this.courseVenue,"courseDuration":this.courseDuration,"courseDate":this.courseDate}
  console.log(data)

  this.api.addCourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("course added successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseVenue=""
          this.courseDuration=""
          this.courseDate=""
        
      } else {
        alert("failed to add")
        
      }
      
     


    }
  )
  }

}

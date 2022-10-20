import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  department=""
  designation=""
  educationQualifaction=""
  addFaculty=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.designation,
      "educationQualifaction":this.educationQualifaction
    }
    this.myapi.addFaculty(data).subscribe((response)=>{
      console.log(response)
      alert("Successfully Added !")
      this.name=""
      this.department=""
      this.designation=""
      this.educationQualifaction=""
    })
  }
  ngOnInit(): void {
  }

}

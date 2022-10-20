import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }
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
  }
  ngOnInit(): void {
  }

}

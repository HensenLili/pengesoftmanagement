import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-experience',
  templateUrl: './staff-experience.component.html',
  styleUrls: ['./staff-experience.component.less']
})
export class StaffExperienceComponent implements OnInit {

  public isWork = false;
  public isEducation = false;
  constructor() { }

  ngOnInit(): void {
  }

  //添加工作经历
  addWork(){
    this.isWork = true;
  }
  workCancel(){
    this.isWork = false;
  }
  workOk(){
    this.isWork = false;
  }

  //添加教育经历
  addEducation(){
    this.isWork = true;
  }
  EducationCancel(){
    this.isWork = false;
  }
  EducationOk(){
    this.isWork = false;
  }
}

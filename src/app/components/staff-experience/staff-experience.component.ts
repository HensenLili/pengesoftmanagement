import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Education } from 'src/app/domains/education.domain';
import { WorkExperience } from 'src/app/domains/workexperience.domain';
import { EducationServiceSvr } from 'src/app/services/education-service.service';
import { WorkExperienceServiceSvr } from 'src/app/services/workexperience-services.service';

@Component({
  selector: 'app-staff-experience',
  templateUrl: './staff-experience.component.html',
  styleUrls: ['./staff-experience.component.less']
})
export class StaffExperienceComponent implements OnInit {
  // 定义
  public isWork = false;
  public isEducation = false;
  public file:File
  public dataListWork = []
  public dataListStudy = []
  formgroup !: FormGroup;
  public mesStaffId = ''
  public education:Education;
  public workExperience :WorkExperience;
  @Input() mes:object

  constructor(
    private workexperienSvr : WorkExperienceServiceSvr,
    private educationSvr:EducationServiceSvr
  ) { }
  ngOnInit(): void {
    this.formgroup =new FormGroup({
      worksStart:new FormControl(),
      worksEnd:new FormControl(),
      worksComp:new FormControl(),
      worksPosi:new FormControl(),
      worksPres:new FormControl(),
      educatSchool:new FormControl(),
      educatMajor:new FormControl(),
      expStart:new FormControl(),
      expEnd:new FormControl(),
      educatDegree:new FormControl()
    })
  
    // @ts-ignore
    this.messtaffid = this.mes.StaffId
    this.workexperienSvr.findByStaffId(this.mesStaffId).then(res=>{
      console.log(res)
      this.dataListWork = res.data
    })
    // @ts-ignore
    this.educationSvr.findByStaffId(this.mesStaffId).then(res=>{
      console.log(res)
      this.dataListStudy = res.data
    })
  }

  // 添加工作经历
  addWork(){
    this.isWork = true;
  }
  // 添加工作经历 取消
  workCancel(){
    this.isWork = false;
  }
  // 添加工作经历 确定
  workOk(){
    this.isWork = false;
    console.log(this.formgroup)
    this.workExperience = new WorkExperience({
      StaffId: this.mesStaffId,
      StartTime: this.formgroup.value.worksStart,
      EndTime:this.formgroup.value.worksEnd,
      Position: this.formgroup.value.worksPosi,
      Reason: this.formgroup.value.worksPres,
      Company: this.formgroup.value.worksComp
    })
    this.workexperienSvr.addExperience(this.workExperience).then(res=>{
      console.log(res)
    })
  }
  // 附件上传
  uploaderImage(ele: HTMLInputElement): void{
    const files = ele.files[0];
    this.file = files;
    console.log(files);
  }
  // 添加教育经历
  addEducation(){
    this.isEducation = true;
  }
  // 添加教育经历 取消
  EducationCancel(){
    this.isEducation = false;
  }
  // 添加教育经历 确定
  EducationOk(){
    this.isEducation = false;
    this.education = new Education({
      StaffId: this.mesStaffId,
      Name:this.formgroup.value.educatSchool,
      Major:this.formgroup.value.educatMajor,
      StartTime: this.formgroup.value.expStart,
      EndTime:this.formgroup.value.expEnd,
      Degree: this.formgroup.value.educatDegree
    })
    this.educationSvr.addEducation(this.education,this.file).then(res=>{
      console.log(res)
    })
  }

}

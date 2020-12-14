import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { StaffServiceSvr } from '../../services/staffservice.service';
@Component({
  selector: 'app-staff-roster',
  templateUrl: './staff-roster.component.html',
  styleUrls: ['./staff-roster.component.less']
})
export class StaffRosterComponent implements OnInit {

  public navflag:boolean = false;
 
//定义每个下拉搜索的开关状态
 public isname=false;
 public isidtype = false;
 public isidnumber =false;
 public isphone = false;
 public isdate = false;
 public issex = false;
//定义每个搜索框输入绑定值
public inputdepartment:any ='';
 public inputname:any = '';
 public inputidtype:any = '';
 public inputidnumber:any = '';
 public inputphone:any = '';
 public inputdate:any = '';
 public inputsex:any = '';
 listOfData=[];
 listOfDisplayData = [...this.listOfData];
 

constructor(
  private staffSvr : StaffServiceSvr
  ) { }
ngOnInit(): void {
  this.getAll();
}

getAll(){
  this.staffSvr.findAllStaff().then(res=>{
    this.listOfData = res.data
    console.log(this.listOfData);
    
  },err=>{
    console.log(err);  
  })
}

 //部门搜索  确定
 searchDepartment():void {
  this.listOfDisplayData = this.listOfData.filter(item=> item.department.indexOf(this.inputdepartment) !== -1);
}

//名字搜索  确定
 searchName(): void {
  this.isname = false;
  this.listOfDisplayData = this.listOfData.filter(item=> item.name.indexOf(this.inputname) !== -1);
}
//名字搜索 取消
reset1(): void {
  this.inputname = '';
  this.searchName();
}

//证件类型搜索  确定
searchIdtype(): void {
this.isidtype = false;
this.listOfDisplayData = this.listOfData.filter(item => item.idtype.indexOf(this.inputidtype) !== -1);
}
//证件类型搜索 取消
  reset2(): void {
this.inputidtype = '';
this.searchIdtype();
}

//证件号搜索  确定
searchIdnumber(): void {
this.isidnumber = false;
this.listOfDisplayData = this.listOfData.filter(item => String(item.idnumber).indexOf(this.inputidnumber) !== -1);
}
//证件号搜索 取消
 reset3(): void {
this.inputidtype = '';
this.searchIdtype();
}

//手机号搜索  确定
 searchPhone(): void {
this.isidnumber = false;
this.listOfDisplayData = this.listOfData.filter(item => String(item.phone).indexOf(this.inputphone) !== -1);
}
//手机号搜索 取消
 reset4(): void {
this.inputphone = '';
this.searchPhone();
}

//入职日期搜索  确定
searchDate(): void {
this.isidnumber = false;
this.listOfDisplayData = this.listOfData.filter(item => String(item.dateOfEntry).indexOf(this.inputdate) !== -1);
}
//手机号搜索 取消
  reset5(): void {
this.inputdate = '';
this.searchDate();
}

//性别搜索  确定
 searchSex(): void {
this.isidnumber = false;
this.listOfDisplayData = this.listOfData.filter(item => String(item.sex).indexOf(this.inputsex) !== -1);
}
//新版搜索 取消
 reset6(): void {
this.inputsex = '';
this.searchSex();
}

 // 收起分类点击事件
 isnav(){
  this.navflag  = !this.navflag;
  // console.log(this.navflag);
}
//刷新
refresh(){
  this.listOfDisplayData = [...this.listOfData];
}



}

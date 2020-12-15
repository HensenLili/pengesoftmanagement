import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { StaffServiceSvr } from '../../services/staffservice.service';
import{Router,NavigationExtras  } from '@angular/router'
import { Staff } from 'src/app/domains/staff.domain';
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
 public listOfData:any=[];
 public listOfDisplayData:Array<Staff> = []


constructor(
  private staffSvr : StaffServiceSvr,
  private route :Router
  ) { }
ngOnInit(): void {
  this.getAll();

}

getAll(){
  this.staffSvr.findAllStaff().then(res=>{
    this.listOfData = res.data
    // console.log(this.listOfData);
    this.listOfDisplayData = [...this.listOfData]
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


 // 收起分类点击事件
 isnav(){
  this.navflag  = !this.navflag;
  // console.log(this.navflag);
}
// Onclick(data:Staff){
//   console.log(data)
//   let extra:NavigationExtras={
//     queryParams:{"data":data}
//   }
//   // this.route.navigate(['/staff/employee'],extra)
// }


}

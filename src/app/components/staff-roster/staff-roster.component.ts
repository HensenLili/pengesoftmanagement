import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { StaffServiceSvr } from '../../services/staffservice.service';
import{Router,NavigationExtras  } from '@angular/router'
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef,NzModalService} from 'ng-zorro-antd/modal'
import{StaffAddModalComponent}from '../../components/staff-add-modal/staff-add-modal.component'
@Component({
  selector: 'app-staff-roster',
  templateUrl: './staff-roster.component.html',
  styleUrls: ['./staff-roster.component.less']
})
export class StaffRosterComponent implements OnInit {

  public navflag:boolean = false;
  public staff:Staff;
  public staff1:Staff;
  public staff2:Staff;
  public staff3:Staff;
  public staff4:Staff;
  public staff5:Staff;
  public DepartmentName:string;
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
  public count
  public official
  public try
  public wait
  public practice
  public leave


constructor(
  private staffSvr : StaffServiceSvr,
  private route :Router,
  private modal:NzModalService
  ) { }
ngOnInit(): void {
  this.getAll();
  this.count = this.staffSvr.findCount(0,0,0,0,'','')

  this.official = this.staffSvr.findCount(43,0,0,0,'','')

  this.try = this.staffSvr.findCount(20,0,0,0,'','')

  this.wait = this.staffSvr.findCount(10,0,0,0,'','')

  this.practice = this.staffSvr.findCount(20,0,0,0,'','')

  this.leave = this.staffSvr.findCount(99,0,0,0,'','')
}

getAll(){
  this.staffSvr.findAllStaff().then(res=>{
    this.listOfData = res.data
    console.log(res);
    this.listOfDisplayData = [...this.listOfData]
  },err=>{
    console.log(err);
  })

}
//新增员工弹窗
add(): void {
  let editModal=this.modal.create({
    nzTitle:"新增员工",
    nzContent:StaffAddModalComponent,
    nzComponentParams:{
    },
    nzFooter:null
  })

  editModal.afterClose.subscribe(res=>{
    console.log(res)
    this.staff =new Staff({
      "StaffId":res.StaffId,
      "Name":res.Name,
      "IdCard":res.IdCard,
      "Gender":res.Gender,
      "PhoneNumber":res.PhoneNumber,
      "EntryTime":res.EntryTime
    })
    this.staffSvr.addStaff(this.staff,res.file).then(res=>{
      console.log(res,555);



    })
    })

}

 //部门搜索
 searchDepartment(event):void {
   this.staff =new Staff({

   })
   this.DepartmentName = event.target.value
   console.log(this.DepartmentName,55566);
  this.staffSvr.findByCondition(this.staff,this.DepartmentName,'').then(res=>{
    console.log(res)
    this.listOfData = res.data;
    this.listOfDisplayData = [...this.listOfData]
  })
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


  tab1() {
   this.staff1 = new Staff({
     "WorkNature":43
   })
    this.staffSvr.findByCondition(this.staff1,'','').then(res=>{
      this.listOfData = res.data
      console.log(res);
      this.listOfDisplayData = [...this.listOfData]
    },err=>{
      console.log(err);
    })
  }

  tab2() {
    this.getAll()
  }

  tab3() {
    this.staff2 = new Staff({
      "WorkNature":20
    })
    this.staffSvr.findByCondition(this.staff2,'','').then(res=>{
      this.listOfData = res.data
      console.log(res);
      this.listOfDisplayData = [...this.listOfData]
    },err=>{
      console.log(err);
    })

  }

  tab4() {
    this.staff3 = new Staff({
      "WorkNature":10
    })
    this.staffSvr.findByCondition(this.staff3,'','').then(res=>{
      this.listOfData = res.data
      console.log(res);
      this.listOfDisplayData = [...this.listOfData]
    },err=>{
      console.log(err);
    })

  }

  tab5() {
    this.staff4 = new Staff({
      "WorkNature":20
    })
    this.staffSvr.findByCondition(this.staff4,'','').then(res=>{
      this.listOfData = res.data
      console.log(res);
      this.listOfDisplayData = [...this.listOfData]
    },err=>{
      console.log(err);
    })

  }

  tab6() {
    this.staff5 = new Staff({
      "WorkNature":99
    })
    this.staffSvr.findByCondition(this.staff5,'','').then(res=>{
      this.listOfData = res.data
      console.log(res);
      this.listOfDisplayData = [...this.listOfData]
    },err=>{
      console.log(err);
    })

  }
}

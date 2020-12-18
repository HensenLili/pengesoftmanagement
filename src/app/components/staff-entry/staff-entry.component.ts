import { Component, OnInit, Injector  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import { StaffServiceSvr } from '../../services/staffservice.service';
import {NzModalRef,NzModalService} from 'ng-zorro-antd/modal'
import {StaffFormalModalComponent} from '../staff-formal-modal/staff-formal-modal.component'
import {StaffMoveModalComponent} from '../staff-move-modal/staff-move-modal.component'
import {StaffLeaveModalComponent} from '../staff-leave-modal/staff-leave-modal.component'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-staff-entry',
  templateUrl: './staff-entry.component.html',
  styleUrls: ['./staff-entry.component.less'],
  providers: [DatePipe]
})

export class StaffEntryComponent extends  CoreComponent implements OnInit {
  // 定义
  public file:File;
  public date:Date;
  public dataTime:Date
  public datePost:string
  formGroup:FormGroup;
  public staff:Staff;
  public workStatus:number;
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []

  constructor(
    private injector: Injector,
    private staffSvr: StaffServiceSvr,
    private modal:NzModalService,
    private datePipe: DatePipe
    ) {
    super(injector);
  }

    ngOnInit(): void {

      this.getAll()
    }
    // 获取所有入职员工
    getAll(){
      this.staff = new Staff({
        "WorkStatus":11
      })
      this.staffSvr.findByCondition(this.staff,'','').then(res=>{
        this.listOfData = res.data;
        this.listOfDisplayData = [...this.listOfData]
        console.log(this.listOfDisplayData,2222);
        console.log(res,3333)
      })
    }

  // 转正弹窗
  showFormal(data:Staff): void {
  let editModal=this.modal.create({
    nzTitle:'转正',
    nzContent:StaffFormalModalComponent,
    nzComponentParams:{
       staff:data
    },
     nzFooter:null
  })
  editModal.afterClose.subscribe(res=>{
    console.log(res)
    this.staff = res[0].toString()
    this.file = res[1]
    this.date = res[2]
    this.dataTime = this.date
      this.datePost = this.datePipe.transform(this.dataTime, 'yyyy-MM-dd HH:mm:ss');
      console.log(this.datePost.toString())
    // console.log(this.staff,11)
    // console.log(this.file,22)
    // console.log(this.date,33)
    // this.datepost = new Date(this.date.toString())
    // console.log(this.datepost)
    // console.log(new Date().toString())
    this.staffSvr.makeStaffRegular(this.staff.toString(),this.datePost.toString(),this.file).then(res => {
      console.log(res,222)
    })
    this.getAll();
  })
  }

  // 调动弹窗
  showMove(data:Staff): void {
    let editModal=this.modal.create({
      nzTitle:"调动",
      nzContent:StaffMoveModalComponent,
      nzComponentParams:{
        staff:data
      },
      nzFooter:null
    })
    editModal.afterClose.subscribe(res=>{
      console.log(res)

      this.staffSvr.updateStaff(res,null).then(res => {
      })
    })
  }

  // 离职弹窗
  showLeave(data:Staff): void {
    let editModal=this.modal.create({
      nzTitle:"离职",
      nzContent:StaffLeaveModalComponent,
      nzComponentParams:{
        staff:data
      },
      nzFooter:null
    })
    editModal.afterClose.subscribe(res=>{
      console.log(res)
      this.staffSvr.updateStaff(res,null).then(res => {
      })
    })
  }

// 添加入职弹窗
addEntry(): void {
  let editModal=this.modal.create({
    nzTitle:"添加入职",
    nzContent:StaffLeaveModalComponent,
    nzComponentParams:{
    },
    nzFooter:null
  })
  editModal.afterClose.subscribe(res=>{
    console.log(res)
    this.staffSvr.updateStaff(res,null).then(res => {
      console.log(res)
    })
  })
}

}

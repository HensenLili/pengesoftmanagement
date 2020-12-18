import { Component, OnInit,Injector } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { CoreComponent } from 'pengesoft-ng-lib';
import { RegularRecordServiceSvr } from 'src/app/services/regular-record.service';
import { StaffServiceSvr } from '../../services/staffservice.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {NzModalRef,NzModalService} from 'ng-zorro-antd/modal'
import {StaffMoveModalComponent} from '../staff-move-modal/staff-move-modal.component'
import {StaffLeaveModalComponent} from '../staff-leave-modal/staff-leave-modal.component'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-staff-formal',
  templateUrl: './staff-formal.component.html',
  styleUrls: ['./staff-formal.component.less'],
  providers: [DatePipe]
})
export class StaffFormalComponent extends  CoreComponent  implements OnInit {

  // 定义
  public staff:Staff;
  public file:File;
  public date:Date;
  public dataTime:Date
  public datepost:string
  public formGroup:FormGroup;
  public workStatus:number;
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []

 constructor(
   private staffSvr : StaffServiceSvr,
   private regularSvr : RegularRecordServiceSvr,
   private modal:NzModalService,
   private injector: Injector,
   private datePipe: DatePipe
  ) {
    super(injector);
  }
  ngOnInit(): void {
    // this.getAll();
    this.getRegularRecord();
  }

  // 获取所有转正员工信息
  getAll(){
    this.staff = new Staff({
      "WorkStatus":21
    })
    this.staffSvr.findByCondition(this.staff,'','').then(res=>{
      this.listOfData = res.data;
      this.listOfDisplayData = [...this.listOfData]
      console.log(res);
    })

  }
  // 获取转正记录
  getRegularRecord(){
    this.regularSvr.findByCondition('','').then(res=>{
      this.listOfData = res.data;
      this.listOfDisplayData = [...this.listOfData]
      console.log(res)
    })
  }
  //调动弹窗
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

      // this.staffSvr.makeStaffJobTransfer().then(res => {
      // })
      // this.getAll();
    })
  }
  //离职弹窗
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
      // this.getAll();
    })
  }

  //添加转正弹窗
  addFormal(): void {
    let editModal=this.modal.create({
      nzTitle:"添加转正",
      nzContent:StaffLeaveModalComponent,
      nzComponentParams:{
      },
      nzFooter:null
    })
    editModal.afterClose.subscribe(res=>{
      console.log(res)
      this.staff = res[0].toString()
      this.file = res[1]
      this.date = res[2]
      this.dataTime = this.date
        this.datepost = this.datePipe.transform(this.dataTime, 'yyyy-MM-dd HH:mm:ss');
        console.log(this.datepost.toString())
      // console.log(this.staff,11)
      // console.log(this.file,22)
      // console.log(this.date,33)
      // this.datepost = new Date(this.date.toString())
      // console.log(this.datepost)
      // console.log(new Date().toString())
      this.staffSvr.makeStaffRegular(this.staff.toString(),this.datepost.toString(),this.file).then(res => {
        console.log(res,222)
      })
        this.getAll();
    })
  }
  

}
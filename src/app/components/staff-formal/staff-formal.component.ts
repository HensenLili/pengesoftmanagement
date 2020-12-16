import { Component, OnInit,Injector } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { CoreComponent } from 'pengesoft-ng-lib';
import { RegularRecordServiceSvr } from 'src/app/services/regular-record.service';
import { StaffServiceSvr } from '../../services/staffservice.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import{NzModalRef,NzModalService} from 'ng-zorro-antd/modal'
import {StaffMoveModalComponent} from '../staff-move-modal/staff-move-modal.component'
import {StaffLeaveModalComponent} from '../staff-leave-modal/staff-leave-modal.component'
@Component({
  selector: 'app-staff-formal',
  templateUrl: './staff-formal.component.html',
  styleUrls: ['./staff-formal.component.less']
})
export class StaffFormalComponent extends  CoreComponent  implements OnInit {


  public staff:Staff;

  public listOfData:any=[];
 public listOfDisplayData:Array<Staff> = []


 constructor(
   private staffSvr : StaffServiceSvr,
   private regularSvr : RegularRecordServiceSvr,
   private modal:NzModalService,
   private injector: Injector,
  ) {
    super(injector);
  }
  ngOnInit(): void {
    // this.getAll();
    this.getRegularRecord();
  }

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

}

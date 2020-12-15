import { Component, OnInit, Injector  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import { StaffServiceSvr } from '../../services/staffservice.service';
import{NzModalRef,NzModalService} from 'ng-zorro-antd/modal'
import {StaffFormalModalComponent} from '../staff-formal-modal/staff-formal-modal.component'
import {StaffMoveModalComponent} from '../staff-move-modal/staff-move-modal.component'

@Component({
  selector: 'app-staff-entry',
  templateUrl: './staff-entry.component.html',
  styleUrls: ['./staff-entry.component.less']
})
export class StaffEntryComponent extends  CoreComponent implements OnInit {


  formGroup:FormGroup;
   public staff:Staff;
  workStatus:number;
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []


  constructor(
    private injector: Injector,
    private staffSvr: StaffServiceSvr,
    private modal:NzModalService
    ) {

    super(injector);
  }

    ngOnInit(): void {

      this.getAll()
    }

    getAll(){

      this.staff = new Staff({
        "WorkStatus":11
      })
      this.staffSvr.findByCondition(this.staff,'','',0).then(res=>{
        this.listOfData = res.data;
        this.listOfDisplayData = [...this.listOfData]
        console.log(this.listOfDisplayData,2222)
      })

    }



//转正弹窗
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
    this.staff = new Staff({
      "StaffId":res.toString(),
      "WorkStatus":21})
      console.log(this.staff)
    this.staffSvr.updateStaff(this.staff).then(res => {
      console.log(res,222)
    })
    this.getAll();
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

      this.staffSvr.updateStaff(res).then(res => {
      })
      this.getAll();
    })
  }

  //离职弹窗
  showLeave(data:Staff): void {
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
      this.staffSvr.updateStaff(res).then(res => {
      })
      this.getAll();
    })
  }



}

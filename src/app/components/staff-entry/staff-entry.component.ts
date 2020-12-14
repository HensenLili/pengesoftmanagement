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

  public isFormal = false;
  public isMove = false;
  public isLeave = false;
  moveNote: string;
  leaveReason:string;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  ItemName: '';
  operator:'';
  formalDate:'';
  formGroup:FormGroup;
  editStaff:Staff
  listOfData = [];
  listOfDisplayData = [...this.listOfData];
  

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
      this.staffSvr.findAllStaff().then(res=>{
        this.listOfData = res.data;
        console.log(this.listOfData)
      },err=>{
        console.log(err)
      })
    }
  setOfCheckedId = new Set<number>();

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];

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
    this.staffSvr.updateStaff(res).then(res => {
    })
  })
  }
  formalOk(): void {
    console.log(this.formGroup.value)
  }
  formalCancel(): void {
    this.isFormal= false;
  }
  commitFormal(){
    
  }
  //调动弹窗
  showMove(data:Staff): void {
    let editModal=this.modal.create({
      nzTitle:"调动",
      nzContent:StaffMoveModalComponent,
      nzComponentParams:{
        // staff:data
      },
      nzFooter:null
    })
    editModal.afterClose.subscribe(res=>{
      console.log(res)
      this.staffSvr.updateStaff(res).then(res => {
      })
    })
  }
  MoveOk(): void {
    this.isMove= false;
  }
  MoveCancel(): void {
    this.isMove= false;
  }
  //离职弹窗
  showLeave(): void {
    this.isLeave = true;
  }
  LeaveOk(): void {
    this.isLeave = false;
  }
  LeaveCancel(): void {
    this.isLeave= false;
  }




  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

}

import { Component, OnInit,Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
@Component({
  selector: 'app-staff-move-modal',
  templateUrl: './staff-move-modal.component.html',
  styleUrls: ['./staff-move-modal.component.less']
})
export class StaffMoveModalComponent extends  CoreComponent implements OnInit {

  staff:Staff
  formGroup:FormGroup;
  itemDepartment:'';
  constructor(
    private modal:NzModalRef,
    private injector:Injector
  ) {
    super(injector);
    this.formGroup = this.formBuilder.group({
      itemDepartment:''
    })
   }

  ngOnInit(): void {
  }
  Onclick(){
    this.modal.destroy({StaffId:this.staff.StaffId})
  }
}

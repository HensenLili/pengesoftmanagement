import { Component, OnInit,Injector } from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-staff-formal-modal',
  templateUrl: './staff-formal-modal.component.html',
  styleUrls: ['./staff-formal-modal.component.less']
})
export class StaffFormalModalComponent extends  CoreComponent implements OnInit {

  staff:Staff
 
  constructor(
    private modal:NzModalRef,
    private injector:Injector
    ) { 
    super(injector);
  
  }

  ngOnInit(): void {
  }
  Onclick(){
    this.modal.destroy(this.staff.StaffId)
  }
  cancel(){
    this.modal.destroy(null)
  }
}

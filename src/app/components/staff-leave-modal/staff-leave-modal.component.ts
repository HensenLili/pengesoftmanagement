import { Component, OnInit ,Injector} from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
@Component({
  selector: 'app-staff-leave-modal',
  templateUrl: './staff-leave-modal.component.html',
  styleUrls: ['./staff-leave-modal.component.less']
})
export class StaffLeaveModalComponent  extends  CoreComponent implements OnInit {

  // 定义
  public staff:Staff
 
  constructor(
    private modal:NzModalRef,
    private injector:Injector
    ) { 
    super(injector);
  }

  ngOnInit(): void {
  }
  // 离职弹窗
  Onclick(){
    this.modal.destroy(this.staff.StaffId)
  }
  // 离职弹窗 取消
  cancel(){
    this.modal.destroy(null)
  }
}

import { Component, OnInit ,Injector} from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-staff-contract-change-modal',
  templateUrl: './staff-contract-change-modal.component.html',
  styleUrls: ['./staff-contract-change-modal.component.less']
})
export class StaffContractChangeModalComponent   extends  CoreComponent implements OnInit {

  staff:Staff
  constructor(
    private modal:NzModalRef,
    private injector:Injector,
    private msg: NzMessageService,
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

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}

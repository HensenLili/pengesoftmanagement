import { Component, OnInit,Injector } from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'

@Component({
  selector: 'app-staff-formal-modal',
  templateUrl: './staff-formal-modal.component.html',
  styleUrls: ['./staff-formal-modal.component.less']
})
export class StaffFormalModalComponent extends  CoreComponent implements OnInit {
    // 定义
  public file:File
  public staff:Staff
  public date:Date

  constructor(
    private modal:NzModalRef,
    private injector:Injector
  ) {
    super(injector);
    }
  ngOnInit(): void {
  }


  onChange(result: Date): void {
    // console.log(result);
    this.date = result
    // console.log(result)
  }
  // 转正弹窗
  Onclick(){
    this.modal.destroy([this.staff.StaffId,this.file,this.date])
    // console.log(this.date)
  }
  // 转正弹窗取消
  cancel(){
    this.modal.destroy(null)
  }
  // 上传
  uploaderImage(ele: HTMLInputElement): void{
    const files = ele.files[0];
    this.file = files;
    console.log(files);
  }

}

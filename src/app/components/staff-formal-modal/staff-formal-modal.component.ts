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
    file:File

    staff:Staff
    date:Date

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

  Onclick(){
    this.modal.destroy([this.staff.StaffId,this.file,this.date])
    // console.log(this.date)
  }
  cancel(){
    this.modal.destroy(null)
  }
  // 图片上传
  uploaderImage(ele: HTMLInputElement): void{
    const files = ele.files[0];
    this.file = files;
    console.log(files);
  }
}

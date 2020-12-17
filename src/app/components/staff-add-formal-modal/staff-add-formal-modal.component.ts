import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
@Component({
  selector: 'app-staff-add-formal-modal',
  templateUrl: './staff-add-formal-modal.component.html',
  styleUrls: ['./staff-add-formal-modal.component.less']
})
export class StaffAddFormalModalComponent implements OnInit {

  file:File
  staff:Staff
  date:Date

constructor(
  private modal:NzModalRef,
  ) {
 
}
                                                                                                          
  ngOnInit(): void {
  }

  Onclick(){
    this.modal.destroy(
      
    )
   
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

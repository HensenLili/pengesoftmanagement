import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-staff-contract-manage',
  templateUrl: './staff-contract-manage.component.html',
  styleUrls: ['./staff-contract-manage.component.less']
})
export class StaffContractManageComponent implements OnInit {

  public isadd = false;
  public contractList=[{name:111},{name:222}];
  constructor(private msg: NzMessageService) { }

  ngOnInit(): void {
  }

 
  addContract(){
    this.isadd=true;
  }
  addOk(){
    this.isadd = false;
  }
  addCancel(){
    this.isadd = false;
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

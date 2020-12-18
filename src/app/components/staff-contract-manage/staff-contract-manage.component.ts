import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-staff-contract-manage',
  templateUrl: './staff-contract-manage.component.html',
  styleUrls: ['./staff-contract-manage.component.less']
})
export class StaffContractManageComponent implements OnInit {
  // 定义
  public isAdd = false;
  public contractList=[{name:111},{name:222}];

  constructor(private msg: NzMessageService) { }
  ngOnInit(): void {
  }

  // 添加合同
  addContract(){
    this.isAdd=true;
  }
  // 添加合同 确定
  addOk(){
    this.isAdd = false;
  }
  // 添加合同 取消
  addCancel(){
    this.isAdd = false;
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

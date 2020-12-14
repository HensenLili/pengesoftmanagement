import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {NzUploadChangeParam} from "ng-zorro-antd/upload";
import {TabView} from "pengesoft-ng-lib";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-recruit-needslist',
  templateUrl: './recruit-needslist.component.html',
  styleUrls: ['./recruit-needslist.component.less']
})
@TabView('简历录入')
export class RecruitNeedslistComponent implements OnInit {
  resumeData!: FormGroup;
  constructor(
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
    this.resumeData = new FormGroup({
      RecruitStageId: new FormControl(),
      ChannelId: new FormControl(),
      PositionId: new FormControl(),
      Name: new FormControl(),
      PhoneNumber: new FormControl(),
      School: new FormControl(),
      RecruitForm: new FormControl(),
      Recommend: new FormControl(),
      Img: new FormControl()
    });
  }


  // 文件上传
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
// 数据提交
  submitForm(): void{
    console.log(this.resumeData);
  }
}

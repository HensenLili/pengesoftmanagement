import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-certificate',
  templateUrl: './staff-certificate.component.html',
  styleUrls: ['./staff-certificate.component.less']
})
export class StaffCertificateComponent implements OnInit {

  // 定义
  public isCert = false;
  public isLanguage = false;

  constructor() { }
  ngOnInit(): void {
  }

   //添加证书弹窗
   addCert(){
    this.isCert = true;
  }
  // 添加证书弹窗 取消
  certCancel(){
    this.isCert= false;
  }
  // 添加证书弹窗 确定
  certOk(){
    this.isCert = false;
  }

  //添加语言证书
  addLanguage(){
    this.isLanguage = true;
  }
  // 添加语言证书 取消
  languageCancel(){
    this.isLanguage = false;
  }
  // 添加语言证书 确定
  languageOk(){
    this.isLanguage = false;
  }

}

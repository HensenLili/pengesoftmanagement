import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-certificate',
  templateUrl: './staff-certificate.component.html',
  styleUrls: ['./staff-certificate.component.less']
})
export class StaffCertificateComponent implements OnInit {

  public isCert = false;
  public isLanguage = false;
  constructor() { }

  ngOnInit(): void {
  }

   //添加工作经历
   addCert(){
    this.isCert = true;
  }
  certCancel(){
    this.isCert= false;
  }
  certOk(){
    this.isCert = false;
  }

  //添加语言证书
  addLanguage(){
    this.isLanguage = true;
  }
  languageCancel(){
    this.isLanguage = false;
  }
  languageOk(){
    this.isLanguage = false;
  }

}

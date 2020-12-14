import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-basic-infor',
  templateUrl: './staff-basic-infor.component.html',
  styleUrls: ['./staff-basic-infor.component.less']
})
export class StaffBasicInforComponent implements OnInit {

  public isShow = true;
  public isChange = false;
  public isButton = false;
  public isEdit = true;
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isShow = !this.isShow
    this.isChange = !this.isChange
    this.isButton =! this.isButton
    this.isEdit =! this.isEdit
  }
  ok(){
    this.isShow = !this.isShow
    this.isChange = !this.isChange
    this.isButton =! this.isButton
    this.isEdit =! this.isEdit
  }
  cancel(){
    this.isShow = !this.isShow
    this.isChange = !this.isChange
    this.isButton =! this.isButton
    this.isEdit =! this.isEdit
  }

}

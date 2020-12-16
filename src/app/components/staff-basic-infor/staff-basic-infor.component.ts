import {Component, Injector, Input, OnInit} from '@angular/core';
import {StaffServiceSvr} from "../../services/staffservice.service";
import {Staff} from "../../domains/staff.domain";
import {CoreComponent} from "pengesoft-ng-lib";

@Component({
  selector: 'app-staff-basic-infor',
  templateUrl: './staff-basic-infor.component.html',
  styleUrls: ['./staff-basic-infor.component.less']
})
export class StaffBasicInforComponent extends CoreComponent implements OnInit {

  public isShow = true;
  public isChange = false;
  public isButton = false;
  public isEdit = true;
  public  staff:Staff
  public staffid:string
  mes1 = {}
  constructor(
      private staffSvr : StaffServiceSvr,
    private injector: Injector,
  ) {
    super(injector);
  }

  @Input() mes:object
  ngOnInit(): void {

    console.log(this.mes)
    // @ts-ignore
    this.staffid = this.mes.StaffId
    console.log(this.staffid)
    this.staff = new Staff({
      "StaffId" : this.staffid
    })
    this.staffSvr.findByCondition(this.staff,'','').then(res=>{
      this.mes1 = res.data[0]
      console.log(res.data[0])
    })
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

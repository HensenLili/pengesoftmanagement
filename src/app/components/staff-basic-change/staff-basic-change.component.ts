import {Component, Injector, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StaffServiceSvr} from "../../services/staffservice.service";
import {CoreComponent} from "pengesoft-ng-lib";
import {Staff} from "../../domains/staff.domain";

@Component({
  selector: 'app-staff-basic-change',
  templateUrl: './staff-basic-change.component.html',
  styleUrls: ['./staff-basic-change.component.less']
})
export class StaffBasicChangeComponent extends CoreComponent implements OnInit {
  //定义
  public mes:object
  public staff:Staff
  public mesShow: any;

  constructor(
    private staffSvr : StaffServiceSvr,
    private injector: Injector,
  ) {
    super(injector);
  }

  @Input() mesid:string
  itemformGroup!: FormGroup;

  ngOnInit(): void {
    this.staff = new Staff({
      "StaffId" : this.mesid
    })
    this.staffSvr.findByCondition(this.staff,'','').then(res=>{
      this.mesShow = res.data[0]
      console.log(res.data[0])
    })

   this.mes = this.mesShow
   console.log(this.mesShow,3)
   this.itemformGroup = new FormGroup({
    Name:new FormControl(),
    IdCard:new FormControl(),
    Birth:new FormControl(),
    Age:new FormControl(),
    MaritalStatus:new FormControl(),
    Gender:new FormControl(),
    Degree:new FormControl(),
    Political:new FormControl(),
    Nation:new FormControl(),
    PositionTypeId:new FormControl(),
    PermanentAddress:new FormControl(),
    CurrentAddress:new FormControl(),
    WorkStatus:new FormControl(),
    StartWorkTime:new FormControl(),
    EntryTime:new FormControl(),
    WorkDays:new FormControl(),
    PyDays:new FormControl(),
    PhoneNumber:new FormControl(),
    HouserPhoneNumber:new FormControl(),
    CompanyEmail:new FormControl(),
    Email:new FormControl(),
    QQ:new FormControl(),
    Wechat:new FormControl()
  })
  }

  Cancel() {
  }

  Submit() {
     // @ts-ignore
     // @ts-ignore
      const {StaffId} = this.messhow;
      this.staff = new Staff({
      "StaffId":StaffId,
      "Name" : this.itemformGroup.value.Name,
      "IdCard" : this.itemformGroup.value.IdCard,
      "Birth" : this.itemformGroup.value.Birth,
      "Age" : this.itemformGroup.value.Age,
      "MaritalStatus" : this.itemformGroup.value.MaritalStatus,
      "Gender" : this.itemformGroup.value.Gender,
      "Degree" : this.itemformGroup.value.Degree,
      "Political" : this.itemformGroup.value.Political,
      "Nation" : this.itemformGroup.value.Nation,
      // "PositionTypeId" : this.itemformGroup.value.PositionTypeId,
      "PermanentAddress" : this.itemformGroup.value.PermanentAddress,
      "CurrentAddress" : this.itemformGroup.value.CurrentAddress,
      "WorkStatus" : this.itemformGroup.value.WorkStatus,
      "StartWorkTime" : this.itemformGroup.value.StartWorkTime,
      "EntryTime" : this.itemformGroup.value.EntryTime,
      "WorkDays" : this.itemformGroup.value.WorkDays,
      "PyDays" : this.itemformGroup.value.PyDays,
      "PhoneNumber" : this.itemformGroup.value.PhoneNumber,
      "HouserPhoneNumber" : this.itemformGroup.value.HouserPhoneNumber,
      "CompanyEmail" : this.itemformGroup.value.CompanyEmail,
      "Email" : this.itemformGroup.value.Email,
      "QQ" : this.itemformGroup.value.QQ,
      "Wechat" : this.itemformGroup.value.Wechat,
    })

    this.staffSvr.updateStaff(this.staff,null).then(res=>{
      console.log(res)
    })
      console.log(this.itemformGroup)
  }
}

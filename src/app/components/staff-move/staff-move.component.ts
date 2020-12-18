import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { StaffServiceSvr } from '../../services/staffservice.service';
import {TransferRecordServiceSvr} from "../../services/transferrecord-service.service";

@Component({
  selector: 'app-staff-move',
  templateUrl: './staff-move.component.html',
  styleUrls: ['./staff-move.component.less']
})
export class StaffMoveComponent implements OnInit {

  // 定义
  public checked = false;
  public indeterminate = false;
  publiclistOfCurrentPageData = [];
  public staff:Staff;
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []

  constructor(
    private staffSvr : StaffServiceSvr,
    private transferSvr : TransferRecordServiceSvr
    ) { }
    ngOnInit(): void {
      this.getAll();
    }

    // 获取所有调用员工信息
  getAll(){
    this.staff = new Staff({
      "WorkStatus":31
    })
    this.transferSvr.findByCondition('','').then(res=>{
      this.listOfData = res.data;
      this.listOfDisplayData = [...this.listOfData]
      console.log(res,33333);
    })

  }
 


}

import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { StaffServiceSvr } from '../../services/staffservice.service';
@Component({
  selector: 'app-staff-move-history',
  templateUrl: './staff-move-history.component.html',
  styleUrls: ['./staff-move-history.component.less']
})
export class StaffMoveHistoryComponent implements OnInit {

// 定义
  public checked = false;
  public indeterminate = false;
  public staff:Staff;
  public staffenter:Staff;
  public staffformal:Staff;
  public staffmove:Staff;
  public staffleave:Staff;
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []

  ngOnInit(): void {
    this.getAll();
  }
  constructor(private staffSvr : StaffServiceSvr) { }

  // 获取所有调用记录
  getAll(){
    // 入职员工信息
    this.staffenter = new Staff({
      "WorkStatus":11
    })
    this.staffSvr.findByCondition(this.staffenter,'','').then(res=>{
      this.listOfData = res.data;
    })
    // 转正员工信息
    this.staffformal = new Staff({
      "WorkStatus":21
    })
    this.staffSvr.findByCondition(this.staffformal,'','').then(res=>{
      this.listOfData = [...this.listOfData,...res.data];
    })
    // 调动员工信息
    this.staffmove = new Staff({
      "WorkStatus":31
    })
    this.staffSvr.findByCondition(this.staffmove,'','').then(res=>{
      this.listOfData = [...this.listOfData,...res.data];
    })
    // 离职员工信息
    this.staffleave = new Staff({
      "WorkStatus":99
    })
    this.staffSvr.findByCondition(this.staffleave,'','').then(res=>{
      this.listOfDisplayData = [...this.listOfData,...res.data];
      console.log(this.listOfDisplayData,111);
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { StaffServiceSvr } from '../../services/staffservice.service';
@Component({
  selector: 'app-staff-move-history',
  templateUrl: './staff-move-history.component.html',
  styleUrls: ['./staff-move-history.component.less']
})
export class StaffMoveHistoryComponent implements OnInit {


  checked = false;
  indeterminate = false;
  listOfCurrentPageData= [];


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
  getAll(){
    // 入职
    this.staffenter = new Staff({
      "WorkStatus":11
    })
    this.staffSvr.findByCondition(this.staffenter,'','').then(res=>{
      this.listOfData = res.data;
    })
    // 转正
    this.staffformal = new Staff({
      "WorkStatus":21
    })
    this.staffSvr.findByCondition(this.staffformal,'','').then(res=>{
      this.listOfData = [...this.listOfData,...res.data];
    })
    // 调动
    this.staffmove = new Staff({
      "WorkStatus":31
    })
    this.staffSvr.findByCondition(this.staffmove,'','').then(res=>{
      this.listOfData = [...this.listOfData,...res.data];
    })
    // 离职
    this.staffleave = new Staff({
      "WorkStatus":99
    })
    this.staffSvr.findByCondition(this.staffleave,'','').then(res=>{
      this.listOfDisplayData = [...this.listOfData,...res.data];
      console.log(this.listOfDisplayData,111);
    })


  }
  setOfCheckedId = new Set<number>();
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }



}

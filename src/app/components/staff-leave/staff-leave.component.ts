import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { StaffServiceSvr } from '../../services/staffservice.service';
@Component({
  selector: 'app-staff-leave',
  templateUrl: './staff-leave.component.html',
  styleUrls: ['./staff-leave.component.less']
})
export class StaffLeaveComponent implements OnInit {

  // 定义
  public checked = false;
  public indeterminate = false;
  public staff:Staff;
  public listOfCurrentPageData=[];
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []
  setOfCheckedId = new Set<number>();


  constructor(private staffSvr : StaffServiceSvr) { }

  ngOnInit(): void {
    this.getAll();
  }

  // 获取所有离职员工信息
  getAll(){
    this.staff = new Staff({
      "WorkStatus":99
    })
    this.staffSvr.findByCondition(this.staff,'','').then(res=>{
      this.listOfData = res.data;
      this.listOfDisplayData = [...this.listOfData]
      console.log(res);
    })
  }

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

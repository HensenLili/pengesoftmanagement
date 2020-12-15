import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { StaffServiceSvr } from '../../services/staffservice.service';
@Component({
  selector: 'app-staff-move',
  templateUrl: './staff-move.component.html',
  styleUrls: ['./staff-move.component.less']
})
export class StaffMoveComponent implements OnInit {

 
  checked = false;
  indeterminate = false;
  listOfCurrentPageData = [];
  public staff:Staff;
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []


  ngOnInit(): void {
    this.getAll();
  }
  constructor(private staffSvr : StaffServiceSvr) { }
  getAll(){
     
    this.staff = new Staff({
      "WorkStatus":31
    })
    this.staffSvr.findByCondition(this.staff,'','',0).then(res=>{
      this.listOfData = res.data;
      this.listOfDisplayData = [...this.listOfData]
      console.log(res);
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

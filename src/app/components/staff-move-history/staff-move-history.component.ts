import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-move-history',
  templateUrl: './staff-move-history.component.html',
  styleUrls: ['./staff-move-history.component.less']
})
export class StaffMoveHistoryComponent implements OnInit {

 
  checked = false;
  indeterminate = false;
  listOfCurrentPageData= [];
 

  listOfData= [
    {
      id: 1,
      moveTime:"2010.11.01",
      name: "张三",
      department: "IT部",
      job:"开发",
      phone:123456789,
      moveType:"转正",
      operator:"孟"
    },
    {
      id: 1,
      moveTime:"2010.11.01",
      name: "张三",
      department: "IT部",
      job:"开发",
      phone:123456789,
      moveType:"离职",
      operator:"孟"
    },
    {
      id: 1,
      moveTime:"2011.11.01",
      name: "张三",
      department: "IT部",
      job:"开发",
      phone:123456789,
      moveType:"调动",
      operator:"孟"
    },
    {
      id: 1,
      moveTime:"2010.11.01",
      name: "李四",
      department: "IT部",
      job:"开发",
      phone:123456789,
      moveType:"入职",
      operator:"孟"
    }
  
   
  ];
  listOfDisplayData = [...this.listOfData];

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
  constructor() { }
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


  ngOnInit(): void {
  }
}

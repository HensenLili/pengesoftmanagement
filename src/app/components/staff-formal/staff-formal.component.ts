import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-formal',
  templateUrl: './staff-formal.component.html',
  styleUrls: ['./staff-formal.component.less']
})
export class StaffFormalComponent implements OnInit {

  checked = false;
  indeterminate = false;
  listOfCurrentPageData= [];
 

  listOfData = [
    {
      id: 1,
      name: "张三",
      department: "IT部",
      job:"开发",
      formaltime:"2020.11.11 15:45",
      operator:"孟"
    },
    {
      id: 1,
      name: "张三",
      department: "IT部",
      job:"开发",
      formaltime:"2020.11.11 15:45",
      operator:"孟"
    },
    {
      id: 1,
      name: "张三",
      department: "IT部",
      job:"开发",
      formaltime:"2020.11.11 15:45",
      operator:"孟"
    },
    {
      id: 1,
      name: "张三",
      department: "IT部",
      job:"开发",
      formaltime:"2020.11.11 15:45",
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
  ngOnInit(): void {
  }
  
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

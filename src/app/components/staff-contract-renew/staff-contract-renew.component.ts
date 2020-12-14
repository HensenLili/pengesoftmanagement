import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-contract-renew',
  templateUrl: './staff-contract-renew.component.html',
  styleUrls: ['./staff-contract-renew.component.less']
})
export class StaffContractRenewComponent implements OnInit {

  public searchValue = '';
  public isSearch = false;
  public isAdd = false;
  listOfData = [
  {
    name:"张三",
    department:"it",
    job:"11",
    phone:1584925798,
    type:"劳动合同",
    day:"xx-xx",
    date:'2020.11.11'
  },
  {
    name:"张三",
    department:"it",
    job:"11",
    phone:1584925798,
    type:"劳动合同",
    day:"xx-xx",
    date:'2020.11.11'
  },
  {
    name:"张三",
    department:"it",
    job:"11",
    phone:1584925798,
    type:"劳动合同",
    day:"xx-xx",
    date:'2020.11.11'
  },
  {
    name:"张三",
    department:"it",
    job:"11",
    phone:1584925798,
    type:"劳动合同",
    day:"xx-xx",
    date:'2020.11.11'
  }
  ];
  listOfDisplayData = [...this.listOfData];

  constructor() { }
  ngOnInit(): void {
  }

 
//搜索弹窗
  search(): void {
    this.isSearch = false;
    this.listOfDisplayData = this.listOfData.filter(item=> item.name.indexOf(this.searchValue) !== -1);
  }
   //搜s索取消
  reset(): void {
    this.searchValue = '';
    this.search();
  }
}

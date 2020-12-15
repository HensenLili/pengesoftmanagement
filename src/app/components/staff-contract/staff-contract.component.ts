import { Component, OnInit } from '@angular/core';
import { StaffServiceSvr } from '../../services/staffservice.service';

@Component({
  selector: 'app-staff-contract',
  templateUrl: './staff-contract.component.html',
  styleUrls: ['./staff-contract.component.less']
})
export class StaffContractComponent implements OnInit {

  public searchValue = '';
  public isSearch = false;
  public isAdd = false;
  public isChange = false;
  public isOver = false;
  listOfData = [{
    name:'张三',
    department:'IT部',
    job:'开发',
    phone:'123456789',
    signDate:'2017.11.16',
    endDate:'2020.11.16',
    status:'已过期'
  }];
  listOfDisplayData = [...this.listOfData];

  constructor(private staffSvr:StaffServiceSvr) { }
  ngOnInit(): void {
    // this.getAll();
  }

  getAll(){
    this.staffSvr.findAllStaff().then(res=>{
      this.listOfData = res.data;
      console.log(this.listOfData)
    },err=>{
      console.log(err)
    })
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

  //续签合同弹窗
  addContract(){
    this.isAdd = true;
  }
  addCancel(){
    this.isAdd = false;
  }
  addOk(){
    this.isAdd = false;
  }
  //变更合同弹窗
  changeContract(){
    this.isChange = true;
  }
  changeOk(){
    this.isChange=false;
  }
  changeCancel(){
    this.isChange = false;
  }
  //终止合同弹窗
  overContract(){
    this.isOver = true;
  }
  overOk(){
    this.isOver = false;
  }
  overCancel(){
    this.isOver =false;
  }
 
}


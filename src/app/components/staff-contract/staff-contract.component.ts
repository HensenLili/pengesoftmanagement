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
  listOfData = [ ];
  listOfDisplayData = [...this.listOfData];

  constructor(private staffSvr:StaffServiceSvr) { }
  ngOnInit(): void {
    this.getAll();
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
 
}


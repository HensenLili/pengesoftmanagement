import { Component, OnInit } from '@angular/core';
import { StaffServiceSvr } from '../../services/staffservice.service';
import { Staff } from 'src/app/domains/staff.domain';
import {StaffContractRenewModalComponent} from '../staff-contract-renew-modal/staff-contract-renew-modal.component';
import {StaffContractChangeModalComponent} from '../staff-contract-change-modal/staff-contract-change-modal.component';
import {StaffContractOverModalComponent} from '../staff-contract-over-modal/staff-contract-over-modal.component';
import{NzModalRef,NzModalService} from 'ng-zorro-antd/modal'
import {ContractServiceSvr } from '../../services/contract-services.service';
import {Contract } from 'src/app/domains/contract.domain';
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
  public contract:Contract;
  public staff:Staff;
  public staffName:string;
  public dataend:{};
  public listOfData:any=[];
  public listOfDisplayData:Array<Staff> = []

  constructor(
    private staffSvr:StaffServiceSvr,
    private modal:NzModalService,
    private contractSvr:ContractServiceSvr,
    ) { }
  ngOnInit(): void {
   this.internship();
  }

 
  //实习协议
  internship(){
    this.contract =new Contract({
      "Type":'11'
    })
      this.contractSvr.findByCondition(this.contract,'','',0).then(res=>{
        console.log(res)
        this.listOfData = res.data;
        this.listOfDisplayData = [...this.listOfData];
      })

  }
  //劳动合同
  labor(){
    this.contract =new Contract({
      "Type":'12'
    })
      this.contractSvr.findByCondition(this.contract,'','',0).then(res=>{
        console.log(res)
        this.listOfData = res.data;
        this.listOfDisplayData = [...this.listOfData];
      })
  }
  // 兼职协议
  partTime(){
    this.contract =new Contract({
      "Type":'13'
    })
      this.contractSvr.findByCondition(this.contract,'','',0).then(res=>{
        console.log(res)
        this.listOfData = res.data;
        this.listOfDisplayData = [...this.listOfData];
      })
  }
 
//搜索弹窗
  search(): void {
    this.isSearch = false;
    this.listOfDisplayData = this.listOfData.filter(item=> item.name.indexOf(this.searchValue) !== -1);
  }
   //搜索取消
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  //续签合同弹窗
  renewContract(data:Contract): void {
  let editModal=this.modal.create({
    nzTitle:"合同续签",
    nzContent:StaffContractRenewModalComponent,
    nzComponentParams:{
      contract:data
    },
    nzFooter:null
  })
  editModal.afterClose.subscribe(res=>{
    console.log(res)
   this.contract = new Contract({
    "ContractId":res.ContractId,
    "StaffId":res.StaffId,
    "Type":res.Type,
    "EfficacyTime":res.EfficacyTime,
    "LoseEfficacyTime":res.LoseEfficacyTime,
    "SignTime":res.SignTime
   })
    this.contractSvr.addContract(this.contract,res.file).then(res => {
      console.log(res,22222)
    })
  })
}

  //变更合同弹窗
 changeContract(data:Contract): void {
  let editModal=this.modal.create({
    nzTitle:"合同变更",
    nzContent:StaffContractChangeModalComponent,
    nzComponentParams:{
      contract:data
    },
    nzFooter:null
  })
  editModal.afterClose.subscribe(res=>{
    console.log(res)
    this.contract = new Contract({
      "StaffId":res.StaffId,
      "ContractId":res.ContractId,
      "Type":res.Type
    })
    this.contractSvr.updateContract(this.contract,res.file).then(res => {
      console.log(res)
    })
  })
}
  //终止合同弹窗
  overContract(data:Contract): void {
    let editModal=this.modal.create({
      nzTitle:"合同终止",
      nzContent:StaffContractOverModalComponent,
      nzComponentParams:{
       contract:data
       
      },
      nzFooter:null
    })
    editModal.afterClose.subscribe(res=>{
      console.log(res)
      this.contract = new Contract({
        "ContractId":res.ContractId,
        "StaffId":res.StaffId,
        "Status":2,
        "LoseEfficacyTime":res.LoseEfficacyTime
      })
      this.contractSvr.updateContract(this.contract,res.file).then(res => {
        console.log(res,222)
      })
    })
  }
 
  
 //姓名搜索 
 searchName(event):void {
  this.staffName= event.target.value
  this.contract =new Contract({
  })
 console.log(this.staff)
 this.contractSvr.findByCondition(this.contract,this.staffName,'',0).then(res=>{
   console.log(res)
   this.listOfData = res.data;
   this.listOfDisplayData = [...this.listOfData]
   
   console.log(this.listOfDisplayData,11111);
   
 })
}
 
}


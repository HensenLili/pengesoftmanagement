import { Component, OnInit, Injector} from '@angular/core';
import {CoreComponent, Dynamic, TabView} from 'pengesoft-ng-lib';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ApplyServiceSvr} from "../../services/recruit-apply.service";
import { Apply } from "../../domains/apply.domain";
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-recruit-management',
  templateUrl: './recruit-management.component.html',
  styleUrls: ['./recruit-management.component.less']
})
@TabView('招聘需求')
@Dynamic()
export class RecruitManagementComponent extends CoreComponent implements OnInit {
  isVisible = false;
  isVisible2 = false;
  listOfData = [];
  constructor(
    private injector: Injector,
    private modal: NzModalService,
    private router: Router,
    private  route: ActivatedRoute,
    private  getDataApply: ApplyServiceSvr,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getAllApplyData();
  }
  showNeedsList(): void{
    this.isVisible2 = true;
  }

  getAllApplyData():void{
    const status = '通过';
    this.getDataApply. gainByStatus(status).then(res=>{
      // if (res.code == 20001){
      //
      // }
      console.log(res);
      this.listOfData = res.data;
    })
  }

//  简历展示
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisible2 = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisible2 = false;
  }

//  完成招聘需求
  showCompletefirm(id,msg): void {
    this.modal.confirm({
      nzTitle: '你已完成了这项招聘需求吗？',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.getDataApply.dealRemarks(id,msg).then(res=>{
          console.log(res);
          this.getAllApplyData();
        });
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}

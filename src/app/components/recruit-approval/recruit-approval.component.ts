import {Component, Injector, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {ActivatedRoute, Router} from "@angular/router";
import {CoreComponent, Dynamic, TabView} from "pengesoft-ng-lib";
import {NzMessageService} from "ng-zorro-antd/message";
import {ApplyServiceSvr} from "../../services/recruit-apply.service";
import { Apply } from "../../domains/apply.domain";
import {keyframes} from "@angular/animations";
@TabView('招聘审批')
@Dynamic()
@Component({
  selector: 'app-recruit-approval',
  templateUrl: './recruit-approval.component.html',
  styleUrls: ['./recruit-approval.component.less']
})
export class RecruitApprovalComponent extends CoreComponent implements OnInit {
  editId: string | null = null;
  isVisible = false;
  isVisible2 = false;
  listOfData = [];
  constructor(
    private injector: Injector,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router,
    private  route: ActivatedRoute,
    private  getApplyDataSvr: ApplyServiceSvr
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getAllApplyData();
  }

  getAllApplyData():void{
    this.getApplyDataSvr.gainApply().then(res=>{
      console.log(res);
      this.listOfData = res.data;
    })
  }


  startEdit(key: string): void {
    this.editId = key;
  }

  stopEdit(): void {
    this.editId = null;
  }
  showNeedsList(): void{
    this.isVisible2 = true;
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
  // 审批通过提示
  showSuccess(id,status,mes): void{
      const Id = Number(id);
    console.log(Id);
    this.modal.success({
      nzTitle: '你确定要通过这条申请吗',
      nzOkText: '通过',
      nzOnOk: () => {
        this.getApplyDataSvr.dealApply(Id,status,mes).then(res=>{
          console.log(res);
          this.getAllApplyData();
        });
        this.message.create('success', `审批通过！`);
        console.log('OK');
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }
//  驳回招聘需求
  showDeleteConfirm(id,status,mes): void {
    this.modal.confirm({
      nzTitle: '你确定要驳回这条招聘需求吗',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.getApplyDataSvr.dealApply(id,status,mes).then(res=>{
          console.log(res);
          this.getAllApplyData();
        });
        this.message.create('success', `驳回成功！`);
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}

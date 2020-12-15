import {Component, Injector, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {ActivatedRoute, Router} from "@angular/router";
import {CoreComponent, Dynamic, TabView} from "pengesoft-ng-lib";
import {NzMessageService} from "ng-zorro-antd/message";
import {keyframes} from "@angular/animations";
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
  note: string;
}
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
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      note: ''
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      note: ''
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      note: ''
    }
  ];
  constructor(
    private injector: Injector,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router,
    private  route: ActivatedRoute
  ) {
    super(injector);
  }

  ngOnInit(): void {
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
  createMessage(): void {
  }
  showSuccess(type: string): void{

    this.modal.success({
      nzTitle: '你确定要通过这条申请吗',
      nzContent: '<b style="color: red;">招聘岗位：前端开发 <br>需求人：赵三</b>',
      nzOkText: '通过',
      nzOnOk: () => {
        this.message.create('success', `审批通过！`);
        console.log('OK');
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }
//  删除招聘需求
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '你确定要删除这条招聘需求吗',
      nzContent: '<b style="color: red;">招聘岗位：前端开发 <br>需求人：赵三</b>',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}

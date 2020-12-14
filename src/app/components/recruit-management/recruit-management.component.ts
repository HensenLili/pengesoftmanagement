import { Component, OnInit, Injector} from '@angular/core';
import {CoreComponent, Dynamic, TabView} from 'pengesoft-ng-lib';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd/modal';
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
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor(
    private injector: Injector,
    private modal: NzModalService,
    private router: Router,
    private  route: ActivatedRoute
  ) {
    super(injector);
  }

  ngOnInit(): void {
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

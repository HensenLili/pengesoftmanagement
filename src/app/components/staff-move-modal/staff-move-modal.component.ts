import { Component, OnInit,Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Staff } from 'src/app/domains/staff.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
const options = [
  {
    value: '研究院',
    label: '研究院',
    isLeaf: true
  },
  {
    value: '财务部',
    label: '财务部',
    isLeaf: true
  },
  {
    value: '行政人事部',
    label: '行政人事部',
    isLeaf: true
  },
  {
    value: '数字房产事业部',
    label: '数字房产事业部',
    children: [
      {
        value: '市场部',
        label: '市场部',
        isLeaf: true
      },{
        value: '产品设计部',
        label: '产品设计部',
        isLeaf: true
      },{
        value: '质量保障部',
        label: '质量保障部',
        isLeaf: true
      },{
        value: '产品开发部',
        label: '产品开发部',
        isLeaf: true
      },{
        value: '数据服务部',
        label: '数据服务部',
        isLeaf: true
      },{
        value: '大项目部',
        label: '大项目部',
        isLeaf: true
      },{
        value: '实施运维一部',
        label: '实施运维一部',
        isLeaf: true
      }
      ,{
        value: '实施运维二部',
        label: '实施运维二部',
        isLeaf: true
      },{
        value: '实施运维三部',
        label: '实施运维三部',
        isLeaf: true
      },{
        value: '实施运维四部',
        label: '实施运维四部',
        isLeaf: true
      }
    ]
  },{
    value: '建设工程大数据事业部',
    label: '建设工程大数据事业部',
    children: [
      {
        value: '市场部',
        label: '市场部',
        isLeaf: true
      },{
        value: '产品设计部',
        label: '产品设计部',
        isLeaf: true
      },{
        value: '产品开发部',
        label: '产品开发部',
        isLeaf: true
      },{
        value: '行业大客户部',
        label: '行业大客户部',
        isLeaf: true
      },{
        value: '算量产品部',
        label: '算量产品部',
        isLeaf: true
      },{
        value: '智慧监管部',
        label: '智慧监管部',
        isLeaf: true
      },{
        value: '计价产品部',
        label: '计价产品部',
        isLeaf: true
      }
      ,{
        value: '数据运维部',
        label: '数据运维部',
        isLeaf: true
      },{
        value: '四川销售公司',
        label: '四川销售公司',
        isLeaf: true
      },{
        value: '北京销售公司',
        label: '北京销售公司',
        isLeaf: true
      },{
        value: '重庆销售公司',
        label: '重庆销售公司',
        isLeaf: true
      },{
        value: '海口销售公司',
        label: '海口销售公司',
        isLeaf: true
      }
    ]
  }
];

@Component({
  selector: 'app-staff-move-modal',
  templateUrl: './staff-move-modal.component.html',
  styleUrls: ['./staff-move-modal.component.less']
})

export class StaffMoveModalComponent extends  CoreComponent implements OnInit {

  nzOptions: NzCascaderOption[] = options;
  values: string[] = ['zhejiang', 'hangzhou', 'xihu'];
  public staff:Staff
  public formGroup:FormGroup;
  public staffname :'';
  public radioValue=[];

  constructor(
    private modal:NzModalRef,
    private injector:Injector,
  ) {
    super(injector);
    this.formGroup = this.formBuilder.group({
      movename:'',
      movedate:'',
      movedepartment:'',
      moveposition:'',
      moveremark:''
    })
   }

  ngOnInit(): void {
    // @ts-ignore
    this.staffname = this.staff.StaffName
  }

    // 调动弹窗
  Onclick(){
    this.modal.destroy(this.formGroup)
    console.log(this.formGroup)
  }
  // 调动弹窗
  cancel(){
    this.modal.destroy(null)
  }
  
  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}

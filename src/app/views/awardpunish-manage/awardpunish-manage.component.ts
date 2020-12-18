import { Component, OnInit } from '@angular/core';
import{NzModalRef,NzModalService} from 'ng-zorro-antd/modal'
import{AwardPunishModalComponent}from '../../components/award-punish-modal/award-punish-modal.component'
@Component({
  selector: 'app-awardpunish-manage',
  templateUrl: './awardpunish-manage.component.html',
  styleUrls: ['./awardpunish-manage.component.less']
})
export class AwardpunishManageComponent implements OnInit {

  // 定义
  theme = true;
  public searchValue = '';
  public visible = false;
  public listOfData= [
    {
      name: "张三",
     department:"IT部",
     condition:"奖励",
     reason:"捡到一分钱",
     date:"2020.11.11"
    },
    {
      name: "李四",
     department:"IT部",
     condition:"奖励",
     reason:"捡到两分钱",
     date:"2020.11.11"
    },
    {
      name: "张三",
     department:"IT部",
     condition:"惩罚",
     reason:"在工作区抽烟",
     date:"2020.11.11"
    }  
  ];
  listOfDisplayData = [...this.listOfData];

  constructor(
    private modal:NzModalService
  ) { }
  ngOnInit(): void {
  }

  // 搜索取消
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  // 搜索
  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item) => item.name.indexOf(this.searchValue) !== -1);
  }

   //添加奖惩弹窗
  add(): void {
  let editModal=this.modal.create({
    nzTitle:"添加奖惩",
    nzContent:AwardPunishModalComponent,
    nzComponentParams:{ 
    },
    nzFooter:null
  })
  editModal.afterClose.subscribe(res=>{
    console.log(res)
    })
}
}

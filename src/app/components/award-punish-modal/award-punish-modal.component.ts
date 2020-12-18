import { Component, OnInit } from '@angular/core';
import{NzModalRef} from 'ng-zorro-antd/modal'
@Component({
  selector: 'app-award-punish-modal',
  templateUrl: './award-punish-modal.component.html',
  styleUrls: ['./award-punish-modal.component.less']
})
export class AwardPunishModalComponent implements OnInit {

  constructor(
    private modal:NzModalRef
  ) { }
  ngOnInit(): void {
  }

  // 添加奖惩弹窗
  Onclick(){
    this.modal.destroy(null)
  }
  // 添加奖惩弹窗
  cancel(){
    this.modal.destroy(null)
  }
}

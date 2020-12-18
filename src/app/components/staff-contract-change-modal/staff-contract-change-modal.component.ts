import { Component, OnInit ,Injector} from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import{NzModalRef} from 'ng-zorro-antd/modal'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Contract } from 'src/app/domains/contract.domain';
@Component({
  selector: 'app-staff-contract-change-modal',
  templateUrl: './staff-contract-change-modal.component.html',
  styleUrls: ['./staff-contract-change-modal.component.less']
})
export class StaffContractChangeModalComponent   extends  CoreComponent implements OnInit {

  // 定义
  public contract:Contract;
  public file:File;
  public Type:string;

  constructor(
    private modal:NzModalRef,
    private injector:Injector,
    private msg: NzMessageService,
  ) { 
    super(injector);
  }
  ngOnInit(): void {
  }

  // 变更合同弹窗 提交
  Onclick(){
    this.modal.destroy({
      ContractId:this.contract.ContractId,
      StaffId:this.contract.StaffId,
      Type:this.Type,
      file:this.file
    })
  }
  // 变更合同弹窗 取消
  cancel(){
    this.modal.destroy(null)
  }

  // 附件上传
  uploaderImage(ele: HTMLInputElement): void{
    const files = ele.files[0];
    this.file = files;
    console.log(files);
  }

}

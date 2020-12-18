import { Component, OnInit,Injector } from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Contract } from 'src/app/domains/contract.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'

@Component({
  selector: 'app-staff-contract-renew-modal',
  templateUrl: './staff-contract-renew-modal.component.html',
  styleUrls: ['./staff-contract-renew-modal.component.less']
})

export class StaffContractRenewModalComponent    extends  CoreComponent  implements OnInit {
  // 定义
  public contract:Contract;
  public file:File;
  public ContractId:string;
  public type:string;
  public EfficacyTime:Date;
  public LoseEfficacyTime:Date;
  public SignTime:Date;

  constructor(
    private modal:NzModalRef,
    private injector:Injector
  ) {
    super(injector);
   }
  ngOnInit(): void {
  
  }

  // 合同续签弹窗
  Onclick(){
    this.modal.destroy({
      ContractId:this.ContractId,
      StaffId:this.contract.StaffId,
      Type:this.type,
      file:this.file,
      EfficacyTime:this.EfficacyTime,
      LoseEfficacyTime:this.LoseEfficacyTime,
      SignTime:this.SignTime
    })
  }
  // 合同续签弹窗 取消
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

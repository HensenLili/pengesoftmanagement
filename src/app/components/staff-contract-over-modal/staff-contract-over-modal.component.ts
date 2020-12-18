import { Component, OnInit ,Injector} from '@angular/core';
import { CoreComponent } from 'pengesoft-ng-lib';
import { Contract } from 'src/app/domains/contract.domain';
import{NzModalRef} from 'ng-zorro-antd/modal'
@Component({
  selector: 'app-staff-contract-over-modal',
  templateUrl: './staff-contract-over-modal.component.html',
  styleUrls: ['./staff-contract-over-modal.component.less']
})
export class StaffContractOverModalComponent extends  CoreComponent implements OnInit {
  // 定义
  public contract:Contract;
  public file:File;
  public LoseEfficacyTime:string;

  constructor(
    private modal:NzModalRef,
    private injector:Injector
  ) {
    super(injector);
   }
  ngOnInit(): void {
  }

  // 变更合同弹窗
  Onclick(){
    this.modal.destroy({
      ContractId:this.contract.ContractId,
      StaffId:this.contract.StaffId,
      LoseEfficacyTime:this.LoseEfficacyTime,
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

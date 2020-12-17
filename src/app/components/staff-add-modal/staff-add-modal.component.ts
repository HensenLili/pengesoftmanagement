import { Component, OnInit } from '@angular/core';
import{NzModalRef} from 'ng-zorro-antd/modal'
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-staff-add-modal',
  templateUrl: './staff-add-modal.component.html',
  styleUrls: ['./staff-add-modal.component.less']
})
export class StaffAddModalComponent implements OnInit {

  public file:File;
  public StaffId:string;
  public Name:string;
  public IdCard:string;
  public Gender:string;
  public PhoneNumber:string;
  public EntryTime:Date;

  constructor(
    private modal:NzModalRef,
    private msg: NzMessageService,
  ) { }

  ngOnInit(): void {
  }

  Onclick(){
    this.modal.destroy({
      file:this.file,
      StaffId:this.StaffId,
      Name:this.Name,
      IdCard:this.IdCard,
      Gender:this.Gender,
      PhoneNumber:this.PhoneNumber,
      EntryTime:this.EntryTime
    })
  }
  cancel(){
    this.modal.destroy(null)
  }
  uploaderImage(ele: HTMLInputElement): void{
    const files = ele.files[0];
    this.file = files;
    console.log(files);
  }
}

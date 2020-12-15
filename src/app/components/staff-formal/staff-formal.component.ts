import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/domains/staff.domain';
import { RegularRecordServiceSvr } from 'src/app/services/regular-record.service';
import { StaffServiceSvr } from '../../services/staffservice.service';
@Component({
  selector: 'app-staff-formal',
  templateUrl: './staff-formal.component.html',
  styleUrls: ['./staff-formal.component.less']
})
export class StaffFormalComponent implements OnInit {


  public staff:Staff;

  public listOfData:any=[];
 public listOfDisplayData:Array<Staff> = []

 
 constructor( 
   private staffSvr : StaffServiceSvr,
   private regularSvr : RegularRecordServiceSvr,
  ) { }
  ngOnInit(): void {
    // this.getAll();
    this.getRegularRecord();
  }

  getAll(){
    this.staff = new Staff({
      "WorkStatus":21
    })
    this.staffSvr.findByCondition(this.staff,'','',0).then(res=>{
      this.listOfData = res.data;
      this.listOfDisplayData = [...this.listOfData]
      console.log(res);
    })
  
  }
  getRegularRecord(){
    this.regularSvr.findByCondition('','').then(res=>{
      this.listOfData = res.data;
      this.listOfDisplayData = [...this.listOfData]
      console.log(res)
    })
  }
 


}

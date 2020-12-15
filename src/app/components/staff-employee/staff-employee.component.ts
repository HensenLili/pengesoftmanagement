import { Component, OnInit } from '@angular/core';
import { StaffServiceSvr } from '../../services/staffservice.service';
import { Staff } from 'src/app/domains/staff.domain';
import {ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-staff-employee',
  templateUrl: './staff-employee.component.html',
  styleUrls: ['./staff-employee.component.less']
})
export class StaffEmployeeComponent implements OnInit {

  editStaff = Staff;
  data:Staff
  public list=[]
  constructor( private staffSvr: StaffServiceSvr,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
    this.route.queryParams.subscribe((data)=>{
      console.log(data)
    })
  }
getAll(){
 this.staffSvr.findAllStaff().then(res=>{
  this.list = res.data
  console.log(this.list)
 })
}

}

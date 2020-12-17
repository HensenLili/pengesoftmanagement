import {Component, Injector, OnInit} from '@angular/core';
import {CoreComponent, Dynamic, TabView} from 'pengesoft-ng-lib';
import {FormControl, FormGroup} from "@angular/forms";
import {ApplyServiceSvr} from "../../services/recruit-apply.service";
import { Apply } from "../../domains/apply.domain";
@Component({
  selector: 'app-recruit-needs-table',
  templateUrl: './recruit-needs-table.component.html',
  styleUrls: ['./recruit-needs-table.component.less']
})
@TabView('招聘需求表')
  // @Dynamic()
export class RecruitNeedsTableComponent extends CoreComponent implements OnInit {
  recruitData!: FormGroup;
  constructor(
    private injector: Injector,
    private addRecruitSvr: ApplyServiceSvr,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.recruitData = new FormGroup({
      UserId: new FormControl(),
      UserName: new FormControl(),
      ApplyTime: new FormControl(),
      ApprovalName:new FormControl(),
      Position: new FormControl(),
      ApplyNumber: new FormControl(),
      FormationNumber: new FormControl(),
      OnNumber: new FormControl(),
      ClassLevel: new FormControl(),
      TrialSalary: new FormControl(),
      RegularSalary: new FormControl(),
      Reason: new FormControl(),
      ApplyMode: new FormControl(),
      Remakes: new FormControl(),
      Major: new FormControl(),
      PreViewer: new FormControl(),
      ReViewer: new FormControl(),
      Requirements: new FormControl()
    });
  }

  submitForm(): void{
    console.log(this.recruitData);
    const Pro = new Apply({
        ApplyId: null,
        UserName:this.recruitData.value.UserName,
        UserId: 'admin',
        ApplyTime: this.recruitData.value.ApplyTime,
        ApprovalName: this.recruitData.value.ApprovalName,
        ApplyNumber: this.recruitData.value.ApplyNumber,
        FormationNumber: this.recruitData.value.FormationNumber,
        OnNumber: this.recruitData.value.OnNumber,
        ClassLevel:this.recruitData.value.ClassLevel,
        TrialSalary:this.recruitData.value.TrialSalary,
        RegularSalary: this.recruitData.value.RegularSalary,
        Reason: this.recruitData.value.Reason,
        ApplyMode:this.recruitData.value.ApplyMode,
        Remarks: this.recruitData.value.Remarks,
        Major: this.recruitData.value.Major,
        PreViewer: this.recruitData.value.PreViewer,
        ReViewer: this.recruitData.value.ReViewer,
        Requirements: this.recruitData.value.Requirements,
        Status:'',
        MoreMes: '',
        position: this.recruitData.value.Position
    });
      // console.log(Pro);
      this.addRecruitSvr.addApply(Pro).then(res=>{
        console.log(res);
      })
  }

}

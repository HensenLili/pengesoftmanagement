import {Component, Injector, OnInit} from '@angular/core';
import {CoreComponent, Dynamic, TabView} from 'pengesoft-ng-lib';
import {FormControl, FormGroup} from "@angular/forms";
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
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.recruitData = new FormGroup({
      department: new FormControl(),
        ApplicationTime: new FormControl(),
        position: new FormControl(),
        recruitNum: new FormControl(),
        establishmentNum: new FormControl(),
        jobNum: new FormControl(),
        positionLevel: new FormControl(),
        probationSalary: new FormControl(),
        RegularSalary: new FormControl(),
        recruitmentReasons: new FormControl(),
        RecruitmentMethods: new FormControl(),
        causeDescription: new FormControl(),
        referenceMajor: new FormControl(),
        firstInterview: new FormControl(),
        retestInterviewer: new FormControl(),
        operatingDuty: new FormControl(),
        Requirements: new FormControl()
    });
  }

  submitForm(): void{
    console.log(this.recruitData);
  }

}

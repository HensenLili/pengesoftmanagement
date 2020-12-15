import {Component, Injector, Input, OnInit} from '@angular/core';
import {CoreComponent, Dynamic, TabView} from 'pengesoft-ng-lib';
import {filter} from "rxjs/operators";
import { ResumeServiceSvr } from "../../services/recruitresume.service";
import {FormControl, FormGroup} from "@angular/forms";
interface DataItem {
    Id: string;
    Name: any;
    Gender: string;
    Education: string;
    School: string;
    Age: string;
    PhoneNumber: string;
    PositionName: any;
    PositionTypeName: string;
    Revicetime: string;
    RecruitStage: any;
}
@Component({
  selector: 'app-recruit-talent-pool',
  templateUrl: './recruit-talent-pool.component.html',
  styleUrls: ['./recruit-talent-pool.component.less']
})
@TabView('人才库')
// @Dynamic()
export class RecruitTalentPoolComponent extends CoreComponent implements OnInit {
  @Input()
  ti: string;
  visible = false;
  isVisible = false;
  visibleInterview = false;
  resumeData!: FormGroup;
  // 简历总数
  resumeTotal = 0;
  public searchValue = '';
  listOfData = [];
  listOfDisplayData = [...this.listOfData];
  constructor(
    private injector: Injector,
    private getResumeDataSvr: ResumeServiceSvr
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getData();
    this.resumeData = new FormGroup({
      RecruitStageId: new FormControl(),
      ChannelId: new FormControl(),
      PositionId: new FormControl(),
      Name: new FormControl(),
      PhoneNumber: new FormControl(),
      School: new FormControl(),
      RecruitForm: new FormControl(),
      Recommend: new FormControl(),
      Img: new FormControl()
    });
  }

  getData(): void{
      this.getResumeDataSvr.gainResumeMes().then( res =>{
        console.log(res);
        this.listOfDisplayData = res.data;
        console.log(res.data.length);
        this.resumeTotal = res.data.length;
      })
  }

  // 打开新增模块
  openAdd(): void{
    this.isVisible = true;
  }

  submitForm(): void{
    console.log(11111);
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // 打开更多筛选模块
  searchOpen(): void {
    this.visible = true;
  }

  // 关闭更多筛选模块
  searchClose(): void {
    this.visible = false;
  }
  职位类别筛选
  searchPosition(): void{
    // this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.PositionName.indexOf(this.searchValue) !== -1);
  }
  // 姓名筛选
  searchName(): void {
    // this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.Name.indexOf(this.searchValue) !== -1);
  }

//  打开面试日程
  interviewSchedule(): void{
    this.visibleInterview = true;
  }
}

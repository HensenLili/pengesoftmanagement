import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-grow-record',
  templateUrl: './staff-grow-record.component.html',
  styleUrls: ['./staff-grow-record.component.less']
})
export class StaffGrowRecordComponent implements OnInit {
  // 定义
  public isReward = false;
  public isTrain = false;
  public isMove= false;
  public isSalary= false;
  constructor() { }

  ngOnInit(): void {
  }
 
  //奖惩记录弹窗
  reward(){
    this.isReward = true;
  }
  rewardOk(): void {
    this.isReward= false;
  }
  rewardCancel(): void {
    this.isReward = false;
  }
  //添加奖惩记录弹窗
  addReward(){
  }

  //培训记录弹窗
  train(){
    this.isTrain = true;
  }
  trainOk(): void {
    this.isTrain= false;
  }
  trainCancel(): void {
    this.isTrain = false;
  }
  //添加培训记录
  addTrain(){
  }

//异动记录
  move(){
    this.isMove = true;
  }
  moveOk(): void {
    this.isMove= false;
  }
  moveCancel(): void {
    this.isMove= false;
  }
  //薪资记录
  salary(){
    this.isSalary = true;
  }
  salaryOk(): void {
    this.isSalary= false;
  }
  salaryCancel(): void {
    this.isSalary= false;
  }
}

import {Component, Injector, Input, OnInit} from '@angular/core';
import {CoreComponent, Dynamic, TabView} from 'pengesoft-ng-lib';

interface DataItem {
  key: string;
  name: string;
  sex: string;
  position: string;
  education: string;
  age: string;
  phone: string;
  applied: string;
  time: string;
}

@Component({
  selector: 'app-recruit-interview',
  templateUrl: './recruit-interview.component.html',
  styleUrls: ['./recruit-interview.component.less']
})
@TabView('面试邀约')
@Dynamic()
export class RecruitInterviewComponent extends CoreComponent implements OnInit {
  @Input()
  ti: string;
  visible = false;
  isVisible = false;
  public searchValue = '';
  listOfData = [
    {
      key: '1',
      name: '张三',
      sex: '男',
      position: '营销类',
      education: '大专',
      age: '26',
      phone: '12154525545',
      applied: '营销经理',
      time: '2020-12-9'
    },
    {
      key: '2',
      name: '李四',
      sex: '女',
      position: '技术类',
      education: '本科',
      age: '26',
      phone: '12154525545',
      applied: '前端开发',
      time: '2020-12-9'
    },
    {
      key: '2',
      name: '李四',
      sex: '女',
      position: '技术类',
      education: '本科',
      age: '26',
      phone: '12154525545',
      applied: '前端开发',
      time: '2020-12-9'
    },
    {
      key: '2',
      name: '李四',
      sex: '女',
      position: '技术类',
      education: '本科',
      age: '26',
      phone: '12154525545',
      applied: '前端开发',
      time: '2020-12-9'
    },
    {
      key: '2',
      name: '李四',
      sex: '女',
      position: '技术类',
      education: '本科',
      age: '26',
      phone: '12154525545',
      applied: '前端开发',
      time: '2020-12-9'
    },
    {
      key: '2',
      name: '李四',
      sex: '女',
      position: '技术类',
      education: '本科',
      age: '26',
      phone: '12154525545',
      applied: '前端开发',
      time: '2020-12-9'
    },
    {
      key: '2',
      name: '李四',
      sex: '女',
      position: '技术类',
      education: '本科',
      age: '26',
      phone: '12154525545',
      applied: '前端开发',
      time: '2020-12-9'
    },
    {
      key: '2',
      name: '李四',
      position: '技术类',
      sex: '女',
      education: '本科',
      age: '26',
      phone: '12154525545',
      applied: '前端开发',
      time: '2020-12-9'
    },
    {
      key: '3',
      name: '王五',
      sex: '男',
      position: '后勤',
      education: '大专',
      age: '26',
      phone: '12154525555',
      applied: '后勤经理',
      time: '2020-12-9'
    }
  ];
  listOfDisplayData = [...this.listOfData];
  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }
  // 打开新增模块
  openAdd(): void{
    this.isVisible = true;
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
  // 职位类别筛选
  searchPosition(): void{
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.position.indexOf(this.searchValue) !== -1);
  }
  // 姓名筛选
  searchName(): void {
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
  }
}

import {Component, Injector, Input, OnInit} from '@angular/core';
import {CoreComponent, Dynamic, TabView} from 'pengesoft-ng-lib';
import {filter} from "rxjs/operators";
import {ResumeServiceSvr} from "../../services/recruitresume.service";
import {Resume, ResumeList} from "../../domains/resume.domain";
import {Offer} from "../../domains/offer.domain";
import {FormControl, FormGroup} from "@angular/forms";
import { NzMessageService } from 'ng-zorro-antd/message';
import { OfferSerivceSvr } from "../../services/send-offer.service";
import { NzUploadModule } from 'ng-zorro-antd/upload';
import {templateJitUrl} from "@angular/compiler";
// import any = jasmine.any;

interface DataItem {
  resumeId: number;
  //简历阶段id.
  recruitStageId: number;
  //岗位id.
  positionId: number;
  //招聘渠道id.
  channelId: number;
  //姓名.
  name: string;
  //性别.
  gender: string;
  //电话.
  phoneNumber: number;
  //学校.
  school: string;
  //招聘形式.
  recruitForm: string;
  //是否内推.
  recommend: string;
  //简历图片.
  img: string;
  //接收时间.
  reciveTime: Date;//邮箱.
  email: string;
  //学历.
  education: string;
  //年龄.
  age: number;
  // 阶段信息 初试 面试 复试 待初试
  RecruitStage: string;
 //offer发送信息
  offerMes: string;
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
  // 展示新增简历
  isVisible = false;
  visibleInterview = false;
  // 展示发送offer Modal
  isVisibleOffer = false;
  resumeData!: FormGroup;
  // 发送简历的信息
  sendOfferData!:FormGroup;
  // 简历总数
  resumeTotal = 0;
  // 查询类型
  searchType = '';
  searchType2 = '';
  searchType3 = '';
  searchType4 = '';
  searchType5 = '';
  searchType6 = '';
  // 排序条件
  orderData = '';
  orderData2 = '';
  orderData3 = '';
  orderData4 = '';
  orderData5 = '';
  orderData6 = '';
  public searchValue = '';
  // 二面查询值
  searchValueTwo = '';
  //发放offer列表 查询值
  searchValueOffer = '';
  // 面试列表查询
  searchInterview = '';
  // 复试列表查询值
  searchValueFu = '';
  // 初试列表查询值
  searchValueOne = '';
  // 数据列表
  listOfData = [];
  listOfDisplayData = [...this.listOfData];
  file: File;
  // 淘汰列表
  resumeOut = [];
  resumeOutData = [];
  // 初试列表
  // 收件人邮箱
  email= '';
  // 各阶段列表
  firstListData = [];
  //通过人员列表
  passListData = [];
  constructor(
    private injector: Injector,
    private getResumeDataSvr: ResumeServiceSvr,
    private message: NzMessageService,
    private sendOfferSvr: OfferSerivceSvr,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getData();
    this.resumeData = new FormGroup({
      ResumeId: new FormControl(),
      RecruitStageId: new FormControl(),
      ChannelId: new FormControl(),
      PositionId: new FormControl(),
      Name: new FormControl(),
      Gender: new FormControl(),
      PhoneNumber: new FormControl(),
      School: new FormControl(),
      RecruitForm: new FormControl(),
      Recommend: new FormControl(),
      Img: new FormControl(),
      ReciveTime: new FormControl(),
      Email: new FormControl(),
      Education: new FormControl(),
      Age: new FormControl(),
      RecruitStage: new FormControl()
    });

    this.sendOfferData = new FormGroup({
      Title: new FormControl(),
      Message: new FormControl(),
      RecieveMail: new FormControl()
    });
  }

  // 获取所有数据
  getData(): void {
    // console.log(this.orderData);
    this.getResumeDataSvr.gainResumeMes(this.orderData).then(res => {
      console.log(res);
      this.listOfDisplayData = res.data;
      // console.log(res.data.length);
      this.resumeTotal = res.data.length;
    });
  }
  // 获取淘汰数据
  getOutData(val): void{
    if (val == 3){
      this.getResumeDataSvr.gainResumeByOut(this.orderData).then( res =>{
        console.log(res);
        this.resumeOut = res.data;
      })
    }else if (val == 1){
      this.getResumeDataSvr.gainAllPass().then(res=>{
        console.log(res.data);
        this.resumeOut = res.data;
      })
    }

  }

  // 获取tab数据（初试，复试，面试，发放offer）
  getStageData(type:string): void{
    // console.log(111);
    this.getResumeDataSvr.gainResumeByStage(type,this.orderData).then(res => {
      //console.log(res);
      this.firstListData = res.data;
      console.log(this.firstListData);
      // this.getData();
      //this.getData();
    });
  }
  // 打开新增模块
  openAdd(): void {
    this.isVisible = true;
  }
  // 表单提交方法
  submitForm(): void {
    console.log(11111);
  }

  // 图片上传
  uploaderImage(ele: HTMLInputElement): void{
    const files = ele.files[0];
    this.file = files;
    console.log(files);
  }
  //添加简历信息
  handleOkAddResume(): void {
    this.isVisible = false;
    console.log(this.resumeData.value);
    const memoryFile = this.file;
    const Pro = new Resume({
      ResumeId: null,
      RecruitStageId: null,
      PositionId: this.resumeData.value.PositionId,
      //招聘渠道id.
      ChannelId: this.resumeData.value.ChannelId,
      //姓名.
      Name: this.resumeData.value.Name,
      //性别.
      Gender: this.resumeData.value.Gender,
      //电话.
      PhoneNumber: this.resumeData.value.PhoneNumber,
      //学校.
      School: this.resumeData.value.School,
      //招聘形式.
      RecruitForm: this.resumeData.value.RecruitForm,
      //是否内推.
      Recommend: this.resumeData.value.Recommend,
      //简历图片.
      Img: null,
      //接收时间.
      ReciveTime: null,
      //邮箱.
      Email: this.resumeData.value.Email,
      //学历.
      Education: this.resumeData.value.Education,
      //年龄.
      Age: this.resumeData.value.Age,
      RecruitStage: this.resumeData.value.RecruitStage,
    });
    console.log(Pro);
    console.log(this.file);
    this.getResumeDataSvr.addResume(Pro,memoryFile).then(res => {
      this.message.create('success', `添加简历成功！`);
      console.log(res);
      this.getData();
    });

  }

  handleOk(): void{
    this.visibleInterview = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }

  //查询简历库数据
  searchTalentPool(type,value,order):void{
      this.getResumeDataSvr.gainResumeAllBy(type,value,order).then(res=>{
        console.log(res);
        this.listOfDisplayData = res.data;
      })
  }

  // 查询待入职的数据
  getPass1():void{
    this.getResumeDataSvr.gainAllPass1().then(res=>{
      console.log(res);
      this.resumeOut = res.data;
    })
  }

  // 模糊查询
  searchData(type,value,order,stage): void {
    console.log(type);
    console.log(value);
    // if (type == 'allData'){
    //   this.getData();
    // }else {
    //   this.getResumeDataSvr.gainResumeBy(type,value,order,stage).then(res => {
    //         console.log(res);
    //         if (res.data.length == 0){
    //           this.message.create("error", '查询数据不存在');
    //         }else {
    //           // searchRes.push(res.data);
    //           // console.log(searchRes);
    //           this.listOfDisplayData = res.data;
    //           // this.message.create("success", '查询成功');
    //           // console.log(this.listOfDisplayData);
    //         }
    //
    //       })
      if (stage == '初试'){
        this.getResumeDataSvr.gainResumeBy(type,value,order,stage).then(res => {
          console.log(res);
          if (res.data.length == 0){
            this.message.create("error", '查询数据不存在');
          }else {
            // searchRes.push(res.data);
            // console.log(searchRes);
            this.firstListData = res.data;
            // this.message.create("success", '查询成功');
            // console.log(this.listOfDisplayData);
          }

        })
      }else if(stage == '复试'){
        this.getResumeDataSvr.gainResumeBy(type,value,order,stage).then(res => {
          console.log(res);
          if (res.data.length == 0){
            this.message.create("error", '查询数据不存在');
          }else {
            // searchRes.push(res.data);
            // console.log(searchRes);
            this.firstListData = res.data;
            // this.message.create("success", '查询成功');
            // console.log(this.listOfDisplayData);
          }

        })
      }else if(stage == '面试'){
        this.getResumeDataSvr.gainResumeBy(type,value,order,stage).then(res => {
          console.log(res);
          if (res.data.length == 0){
            this.message.create("error", '查询数据不存在');
          }else {
            // searchRes.push(res.data);
            // console.log(searchRes);
            this.firstListData = res.data;
            // this.message.create("success", '查询成功');
            // console.log(this.listOfDisplayData);
          }

        })
      }else if(stage == '二面'){
        this.getResumeDataSvr.gainResumeBy(type,value,order,stage).then(res => {
          console.log(res);
          if (res.data.length == 0){
            this.message.create("error", '查询数据不存在');
          }else {
            // searchRes.push(res.data);
            // console.log(searchRes);
            this.firstListData = res.data;
            // this.message.create("success", '查询成功');
            // console.log(this.listOfDisplayData);
          }
        })
      }else if(stage == '淘汰'){
        this.getResumeDataSvr.gainResumeBy(type,value,order,stage).then(res => {
          console.log(res);
          if (res.data.length == 0){
            this.message.create("error", '查询数据不存在');
          }else {
            // searchRes.push(res.data);
            // console.log(searchRes);
            this.firstListData = res.data;
            // this.message.create("success", '查询成功');
            // console.log(this.listOfDisplayData);
          }
        })
      }
      // else if (typeNum == 2){
      //   this.getResumeDataSvr.gainResumeBy(type,value,order).then(res => {
      //     console.log(res);
      //     if (res.data.length == 0){
      //       this.message.create("error", '查询数据不存在');
      //     }else {
      //       // searchRes.push(res.data);
      //       // console.log(searchRes);
      //       this.firstListData = res.data;
      //       // this.message.create("success", '查询成功');
      //       // console.log(this.listOfDisplayData);
      //     }
      //
      //   })
      // }else if (typeNum == 3){
      //   this.getResumeDataSvr.gainResumeBy(type,value,order).then(res => {
      //     console.log(res);
      //     if (res.data.length == 0){
      //       this.message.create("error", '查询数据不存在');
      //     }else {
      //       // searchRes.push(res.data);
      //       // console.log(searchRes);
      //       this.firstListData = res.data;
      //       // this.message.create("success", '查询成功');
      //       // console.log(this.listOfDisplayData);
      //     }
      //
      //   })
      // }else if (typeNum == 4){
      //   this.getResumeDataSvr.gainResumeBy(type,value,order).then(res => {
      //     console.log(res);
      //     if (res.data.length == 0){
      //       this.message.create("error", '查询数据不存在');
      //     }else {
      //       // searchRes.push(res.data);
      //       // console.log(searchRes);
      //       this.firstListData = res.data;
      //       // this.message.create("success", '查询成功');
      //       // console.log(this.listOfDisplayData);
      //     }
      //
      //   })
      // }else if (typeNum == 5){
      //   this.getResumeDataSvr.gainResumeBy(type,value,order).then(res => {
      //     console.log(res);
      //     if (res.data.length == 0){
      //       this.message.create("error", '查询数据不存在');
      //     }else {
      //       // searchRes.push(res.data);
      //       // console.log(searchRes);
      //       this.firstListData = res.data;
      //       // this.message.create("success", '查询成功');
      //       // console.log(this.listOfDisplayData);
      //     }
      //
      //   })
      // }else if (typeNum == 6){
      //   this.getResumeDataSvr.gainResumeBy(type,value,order).then(res => {
      //     console.log(res);
      //     if (res.data.length == 0){
      //       this.message.create("error", '查询数据不存在');
      //     }else {
      //       // searchRes.push(res.data);
      //       // console.log(searchRes);
      //       this.firstListData = res.data;
      //       // this.message.create("success", '查询成功');
      //       // console.log(this.listOfDisplayData);
      //     }
      //
      //   })
      // }

    // }
  }


  //  改变应聘人员状态
    changeStage(id,status): void {
        this.getResumeDataSvr.updateResumeStatus(id,status).then(res=>{
          console.log(res);
          this.getData();
        })
    }

    // 查找所有通过的应聘人员信息
  getPass():void{
    this.getResumeDataSvr.gainAllPass().then(res=>{
      console.log(res.data);
    })
  }

//  打开面试日程
  interviewSchedule(): void {
    this.visibleInterview = true;
  }

  //  发放offer
  // 打开发放offer面板
    OfferModal(data): void {
      this.isVisibleOffer = true;
      this.resumeOutData = data;
      //console.log(this.resumeOutData);
      this.email = data.Email;
      //console.log(this.email);
    }
  //  关闭发放offer面板
  cancelOfferModal():void{
    this.isVisibleOffer = false;
  }
  // 点击取消按钮后 关闭offer面板
  handleCancelOffer():void{
    this.isVisibleOffer = false;
  }
  // 点击发送offer按钮后
  handleOkOffer(id):void{
    this.isVisibleOffer = false;
    console.log(this.sendOfferData);
    const memoryFile = this.file;
    const Pro = new Offer({
      OfferId: null,
      ResumeId: id,
      title: this.sendOfferData.value.Title,
      Message: this.sendOfferData.value.Message,
      SendTime: null,
      SendMail:null,
      RecieveMail: this.sendOfferData.value.RecieveMail,
      OfferFile: null
    });
    //console.log(Pro);
    this.sendOfferSvr.addOffer(Pro,memoryFile).then(res=>{
      console.log(res);
    })
  }

}

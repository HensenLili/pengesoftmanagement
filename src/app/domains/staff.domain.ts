/*****************************************************************************
 *
 * 作   者: 李翔 * 创建时间: 2020/12/17 12:02:49 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * 员工基础信息
 */
export class Staff extends DataPacket {
  StaffId: string; // 工号
  Name: string; // 姓名
  PositionId: string; // 岗位编号
  Birth: Date | string; // 生日
  IdCard: string; // 身份证号码
  Age: number; // 年龄
  PyDays: number; // 鹏业工龄
  WorkDays: number; // 职业工龄
  MaritalStatus: number; // 婚姻状况
  Gender: string; // 性别
  Political: string; // 政治面貌
  Nation: string; // 民族
  AddressType: number; // 户籍类型
  PermanentAddress: string; // 户籍地址
  CurrentAddress: string; // 现居地址
  HouserPhoneNumber: string; // 家庭电话
  PhoneNumber: string; // 手机号码
  CompanyEmail: string; // 公司邮箱
  Email: string; // 个人邮箱
  Wechat: string; // 微信
  QQ: string; // qq
  WorkNature: number; // 工作性质
  WorkStatus: number; // 工作状态
  StartWorkTime: Date | string; // 开始工作时间
  EntryTime: Date | string; // 入职时间
  Degree: string; // 最高学位
  HeadImg: string; // 用户头像

  constructor(options: {
    StaffId?: string;
    Name?: string;
    PositionId?: string;
    Birth?: Date | string;
    IdCard?: string;
    Age?: number;
    PyDays?: number;
    WorkDays?: number;
    MaritalStatus?: number;
    Gender?: string;
    Political?: string;
    Nation?: string;
    AddressType?: number;
    PermanentAddress?: string;
    CurrentAddress?: string;
    HouserPhoneNumber?: string;
    PhoneNumber?: string;
    CompanyEmail?: string;
    Email?: string;
    Wechat?: string;
    QQ?: string;
    WorkNature?: number;
    WorkStatus?: number;
    StartWorkTime?: Date | string;
    EntryTime?: Date | string;
    Degree?: string;
    HeadImg?: string;
  } = {}) {
    super();
    this.StaffId = options.StaffId || '';
    this.Name = options.Name || '';
    this.PositionId = options.PositionId || '';
    this.Birth = this.newDate(options.Birth);
    this.IdCard = options.IdCard || '';
    this.Age = !options.Age ? 0 : Number.parseFloat(options.Age.toString());
    this.PyDays = !options.PyDays ? 0 : Number.parseFloat(options.PyDays.toString());
    this.WorkDays = !options.WorkDays ? 0 : Number.parseFloat(options.WorkDays.toString());
    this.MaritalStatus = !options.MaritalStatus ? 0 : Number.parseFloat(options.MaritalStatus.toString());
    this.Gender = options.Gender || '';
    this.Political = options.Political || '';
    this.Nation = options.Nation || '';
    this.AddressType = !options.AddressType ? 0 : Number.parseFloat(options.AddressType.toString());
    this.PermanentAddress = options.PermanentAddress || '';
    this.CurrentAddress = options.CurrentAddress || '';
    this.HouserPhoneNumber = options.HouserPhoneNumber || '';
    this.PhoneNumber = options.PhoneNumber || '';
    this.CompanyEmail = options.CompanyEmail || '';
    this.Email = options.Email || '';
    this.Wechat = options.Wechat || '';
    this.QQ = options.QQ || '';
    this.WorkNature = !options.WorkNature ? 0 : Number.parseFloat(options.WorkNature.toString());
    this.WorkStatus = !options.WorkStatus ? 0 : Number.parseFloat(options.WorkStatus.toString());
    this.StartWorkTime = this.newDate(options.StartWorkTime);
    this.EntryTime = this.newDate(options.EntryTime);
    this.Degree = options.Degree || '';
    this.HeadImg = options.HeadImg || '';
  }
}

/**
 * 员工基础信息列表
 */
export class StaffList extends NorDataList<Staff> {

  constructor(options: {
    _Items?: Array<Staff>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Staff(item));
      }
    }
  }
}

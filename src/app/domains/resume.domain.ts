
/*****************************************************************************
 *
 * 作   者: 亢远露 * 创建时间: 2020/12/15 10:03:52 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * 简历信息表
 */
export class Resume extends DataPacket {
  ResumeId: number; // id
  RecruitStageId: string; // 简历阶段id
  PositionId: string; // 岗位id
  ChannelId: string; // 招聘渠道id
  Name: string; // 姓名
  Gender: string; // 性别
  PhoneNumber: string; // 电话
  School: string; // 学校
  RecruitForm: string; // 招聘形式
  Recommend: number; // 是否内推
  Img: string; // 简历图片
  ReciveTime: Date | string; // 接收时间
  Email: string; // 邮箱
  Education: string; // 学历
  Age: number; // 年龄

  constructor(options: {
    ResumeId?: number;
    RecruitStageId?: string;
    PositionId?: string;
    ChannelId?: string;
    Name?: string;
    Gender?: string;
    PhoneNumber?: string;
    School?: string;
    RecruitForm?: string;
    Recommend?: number;
    Img?: string;
    ReciveTime?: Date | string;
    Email?: string;
    Education?: string;
    Age?: number;
  } = {}) {
    super();
    this.ResumeId = !options.ResumeId ? 0 : Number.parseFloat(options.ResumeId.toString());
    this.RecruitStageId = options.RecruitStageId || '';
    this.PositionId = options.PositionId || '';
    this.ChannelId = options.ChannelId || '';
    this.Name = options.Name || '';
    this.Gender = options.Gender || '';
    this.PhoneNumber = options.PhoneNumber || '';
    this.School = options.School || '';
    this.RecruitForm = options.RecruitForm || '';
    this.Recommend = !options.Recommend ? 0 : Number.parseFloat(options.Recommend.toString());
    this.Img = options.Img || '';
    this.ReciveTime = this.newDate(options.ReciveTime);
    this.Email = options.Email || '';
    this.Education = options.Education || '';
    this.Age = !options.Age ? 0 : Number.parseFloat(options.Age.toString());
  }
}

/**
 * 简历信息表列表
 */
export class ResumeList extends NorDataList<Resume> {

  constructor(options: {
    _Items?: Array<Resume>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Resume(item));
      }
    }
  }
}



/*****************************************************************************
 *
 * 作   者: 亢远露 * 创建时间: 2020/12/15 17:31:23 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * 简历信息表
 */
export class Resume extends DataPacket {
  ResumeId: number; // id
  RecruitStageId: number; // 简历阶段id
  PositionId: number; // 岗位id
  ChannelId: number; // 招聘渠道id
  Name: string; // 姓名
  Gender: string; // 性别
  PhoneNumber: number; // 电话
  School: string; // 学校
  RecruitForm: string; // 招聘形式
  Recommend: string; // 是否内推
  Img: string; // 简历图片
  ReciveTime: Date | string; // 接收时间
  Email: string; // 邮箱
  Education: string; // 学历
  Age: number; // 年龄
  RecruitStage: string; // 面试阶段信息

  constructor(options: {
    ResumeId?: number;
    RecruitStageId?: number;
    PositionId?: number;
    ChannelId?: number;
    Name?: string;
    Gender?: string;
    PhoneNumber?: number;
    School?: string;
    RecruitForm?: string;
    Recommend?: string;
    Img?: string;
    ReciveTime?: Date | string;
    Email?: string;
    Education?: string;
    Age?: number;
    RecruitStage?: string;
  } = {}) {
    super();
    this.ResumeId = !options.ResumeId ? 0 : Number.parseFloat(options.ResumeId.toString());
    this.RecruitStageId = !options.RecruitStageId ? 0 : Number.parseFloat(options.RecruitStageId.toString());
    this.PositionId = !options.PositionId ? 0 : Number.parseFloat(options.PositionId.toString());
    this.ChannelId = !options.ChannelId ? 0 : Number.parseFloat(options.ChannelId.toString());
    this.Name = options.Name || '';
    this.Gender = options.Gender || '';
    this.PhoneNumber = !options.PhoneNumber ? 0 : Number.parseFloat(options.PhoneNumber.toString());
    this.School = options.School || '';
    this.RecruitForm = options.RecruitForm || '';
    this.Recommend = options.Recommend || '';
    this.Img = options.Img || '';
    this.ReciveTime = this.newDate(options.ReciveTime);
    this.Email = options.Email || '';
    this.Education = options.Education || '';
    this.Age = !options.Age ? 0 : Number.parseFloat(options.Age.toString());
    this.RecruitStage = options.RecruitStage || '';
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


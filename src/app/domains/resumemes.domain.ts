
/*****************************************************************************
 *
 * 作   者: 亢远露 * 创建时间: 2020/12/15 17:54:12 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';
import {RecruitStage} from './recruitstage.domain';

/**
 * 
 */
export class ResumeMes extends DataPacket {
  Id: number; // 简历id
  Name: string; // 姓名
  Gender: string; // 性别
  Education: string; // 学历
  School: string; // 毕业学校
  Age: number; // 年龄
  PhoneNumber: string; // 电话号码
  PositionName: string; // 职位名称
  PositionTypeName: string; // 职位类别名称
  Revicetime: Date | string; // 接收时间
  RecruitStage1: RecruitStage; // 面试阶段
  RecruitStage: string; // 面试阶段信息

  constructor(options: {
    Id?: number;
    Name?: string;
    Gender?: string;
    Education?: string;
    School?: string;
    Age?: number;
    PhoneNumber?: string;
    PositionName?: string;
    PositionTypeName?: string;
    Revicetime?: Date | string;
    RecruitStage1?: RecruitStage;
    RecruitStage?: string;
  } = {}) {
    super();
    this.Id = !options.Id ? 0 : Number.parseFloat(options.Id.toString());
    this.Name = options.Name || '';
    this.Gender = options.Gender || '';
    this.Education = options.Education || '';
    this.School = options.School || '';
    this.Age = !options.Age ? 0 : Number.parseFloat(options.Age.toString());
    this.PhoneNumber = options.PhoneNumber || '';
    this.PositionName = options.PositionName || '';
    this.PositionTypeName = options.PositionTypeName || '';
    this.Revicetime = this.newDate(options.Revicetime);
    this.RecruitStage1 = new RecruitStage(options?.RecruitStage1);
    this.RecruitStage = options.RecruitStage || '';
  }
}

/**
 * 列表
 */
export class ResumeMesList extends NorDataList<ResumeMes> {

  constructor(options: {
    _Items?: Array<ResumeMes>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new ResumeMes(item));
      }
    }
  }
}



/*****************************************************************************
 *
 * 作   者: 李翔 * 创建时间: 2020/12/17 4:48:11 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * 教育经历
 */
export class Education extends DataPacket {
  EducationId: number; // id
  StaffId: string; // 员工id
  Name: string; // 学校
  Major: string; // 专业
  StartTime: Date | string; // 开始时间
  EndTime: Date | string; // 结束时间
  Number: string; // 证书编号
  Img: string; // 证书照片
  Degree: string; // 学位

  constructor(options: {
    EducationId?: number;
    StaffId?: string;
    Name?: string;
    Major?: string;
    StartTime?: Date | string;
    EndTime?: Date | string;
    Number?: string;
    Img?: string;
    Degree?: string;
  } = {}) {
    super();
    this.EducationId = !options.EducationId ? 0 : Number.parseFloat(options.EducationId.toString());
    this.StaffId = options.StaffId || '';
    this.Name = options.Name || '';
    this.Major = options.Major || '';
    this.StartTime = this.newDate(options.StartTime);
    this.EndTime = this.newDate(options.EndTime);
    this.Number = options.Number || '';
    this.Img = options.Img || '';
    this.Degree = options.Degree || '';
  }
}

/**
 * 教育经历列表
 */
export class EducationList extends NorDataList<Education> {

  constructor(options: {
    _Items?: Array<Education>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Education(item));
      }
    }
  }
}

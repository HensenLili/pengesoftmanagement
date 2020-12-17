/*****************************************************************************
 *
 * 作   者: 李翔 * 创建时间: 2020/12/17 3:41:23 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * 工作经验
 */
export class WorkExperience extends DataPacket {
  WorkExpId: string; // id
  StaffId: string; // 员工id
  StartTime: Date | string; // 开始时间
  EndTime: Date | string; // 结束时间
  Position: string; // 职位
  Reason: string; // 离职原因
  Company: string; // 所在公司

  constructor(options: {
    WorkExpId?: string;
    StaffId?: string;
    StartTime?: Date | string;
    EndTime?: Date | string;
    Position?: string;
    Reason?: string;
    Company?: string;
  } = {}) {
    super();
    this.WorkExpId = options.WorkExpId || '';
    this.StaffId = options.StaffId || '';
    this.StartTime = this.newDate(options.StartTime);
    this.EndTime = this.newDate(options.EndTime);
    this.Position = options.Position || '';
    this.Reason = options.Reason || '';
    this.Company = options.Company || '';
  }
}

/**
 * 工作经验列表
 */
export class WorkExperienceList extends NorDataList<WorkExperience> {

  constructor(options: {
    _Items?: Array<WorkExperience>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new WorkExperience(item));
      }
    }
  }
}

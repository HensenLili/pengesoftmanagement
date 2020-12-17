/*****************************************************************************
 *
 * 作   者: 李翔 * 创建时间: 2020/12/17 9:35:25 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 *
 */
export class TransferRecord extends DataPacket {
  TransferId: number; // 调岗记录id
  StaffId: string; // 员工id
  OperatorId: string; // 操作人id
  OperatorName: string; // 操作人姓名
  BeforeDepartment: string; // 调动前部门名称
  BeforePosition: string; // 调动前岗位名称
  TransferImg: string; // 岗位异动文件
  SalaryImg: string; // 薪资变动文件
  TransferTime: Date | string; // 调动日期
  TransferType: number; // 调动类型

  constructor(options: {
    TransferId?: number;
    StaffId?: string;
    OperatorId?: string;
    OperatorName?: string;
    BeforeDepartment?: string;
    BeforePosition?: string;
    TransferImg?: string;
    SalaryImg?: string;
    TransferTime?: Date | string;
    TransferType?: number;
  } = {}) {
    super();
    this.TransferId = !options.TransferId ? 0 : Number.parseFloat(options.TransferId.toString());
    this.StaffId = options.StaffId || '';
    this.OperatorId = options.OperatorId || '';
    this.OperatorName = options.OperatorName || '';
    this.BeforeDepartment = options.BeforeDepartment || '';
    this.BeforePosition = options.BeforePosition || '';
    this.TransferImg = options.TransferImg || '';
    this.SalaryImg = options.SalaryImg || '';
    this.TransferTime = this.newDate(options.TransferTime);
    this.TransferType = !options.TransferType ? 0 : Number.parseFloat(options.TransferType.toString());
  }
}

/**
 * 列表
 */
export class TransferRecordList extends NorDataList<TransferRecord> {

  constructor(options: {
    _Items?: Array<TransferRecord>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new TransferRecord(item));
      }
    }
  }
}

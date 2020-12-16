
/*****************************************************************************
 *
 * 作   者: 李翔 * 创建时间: 2020/12/16 10:33:17 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * 
 */
export class Contract extends DataPacket {
  ContractId: string; // 合同编号
  StaffId: string; // 员工id
  ContractTime: string; // 合同年限
  Type: string; // 合同类型
  SignTime: Date | string; // 签署日期
  Status: number; // 合同状态
  Img: string; // 合同图片
  EfficacyTime: Date | string; // 生效时间
  LoseEfficacyTime: Date | string; // 失效时间

  constructor(options: {
    ContractId?: string;
    StaffId?: string;
    ContractTime?: string;
    Type?: string;
    SignTime?: Date | string;
    Status?: number;
    Img?: string;
    EfficacyTime?: Date | string;
    LoseEfficacyTime?: Date | string;
  } = {}) {
    super();
    this.ContractId = options.ContractId || '';
    this.StaffId = options.StaffId || '';
    this.ContractTime = options.ContractTime || '';
    this.Type = options.Type || '';
    this.SignTime = this.newDate(options.SignTime);
    this.Status = !options.Status ? 0 : Number.parseFloat(options.Status.toString());
    this.Img = options.Img || '';
    this.EfficacyTime = this.newDate(options.EfficacyTime);
    this.LoseEfficacyTime = this.newDate(options.LoseEfficacyTime);
  }
}

/**
 * 列表
 */
export class ContractList extends NorDataList<Contract> {

  constructor(options: {
    _Items?: Array<Contract>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Contract(item));
      }
    }
  }
}


/*****************************************************************************
 *
 * 作   者: 亢远露 * 创建时间: 2020/12/17 10:09:50 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * Apply申请信息类
 */
export class Apply extends DataPacket {
  ApplyId: number; // 申请编号
  UserName: string; // 申请人姓名
  UserId: string; // 申请人id
  ApplyTime: Date | string; // 申请时间
  ApprovalName: string; // 审批人姓名
  ApprovalId: string; // 审批人id
  ApplyNumber: number; // 招聘数量
  FormationNumber: number; // 编制数量
  OnNumber: number; // 在岗数量
  ClassLevel: number; // 岗位级别
  TrialSalary: string; // 试用薪酬范围
  RegularSalary: string; // 转正薪酬范围
  Reason: string; // 招聘原因
  ApplyMode: string; // 招聘方式
  Remarks: string; // 原因说明
  Major: string; // 参考专业
  PreViewer: string; // 初试面试官
  ReViewer: string; // 复试面试官
  Requirements: string; // 招聘要求
  Status: string; // 申请状态
  MoreMes: string; // 审批备注
  position: string; // 招聘岗位

  constructor(options: {
    ApplyId?: number;
    UserName?: string;
    UserId?: string;
    ApplyTime?: Date | string;
    ApprovalName?: string;
    ApprovalId?: string;
    ApplyNumber?: number;
    FormationNumber?: number;
    OnNumber?: number;
    ClassLevel?: number;
    TrialSalary?: string;
    RegularSalary?: string;
    Reason?: string;
    ApplyMode?: string;
    Remarks?: string;
    Major?: string;
    PreViewer?: string;
    ReViewer?: string;
    Requirements?: string;
    Status?: string;
    MoreMes?: string;
    position?: string;
  } = {}) {
    super();
    this.ApplyId = !options.ApplyId ? 0 : Number.parseFloat(options.ApplyId.toString());
    this.UserName = options.UserName || '';
    this.UserId = options.UserId || '';
    this.ApplyTime = this.newDate(options.ApplyTime);
    this.ApprovalName = options.ApprovalName || '';
    this.ApprovalId = options.ApprovalId || '';
    this.ApplyNumber = !options.ApplyNumber ? 0 : Number.parseFloat(options.ApplyNumber.toString());
    this.FormationNumber = !options.FormationNumber ? 0 : Number.parseFloat(options.FormationNumber.toString());
    this.OnNumber = !options.OnNumber ? 0 : Number.parseFloat(options.OnNumber.toString());
    this.ClassLevel = !options.ClassLevel ? 0 : Number.parseFloat(options.ClassLevel.toString());
    this.TrialSalary = options.TrialSalary || '';
    this.RegularSalary = options.RegularSalary || '';
    this.Reason = options.Reason || '';
    this.ApplyMode = options.ApplyMode || '';
    this.Remarks = options.Remarks || '';
    this.Major = options.Major || '';
    this.PreViewer = options.PreViewer || '';
    this.ReViewer = options.ReViewer || '';
    this.Requirements = options.Requirements || '';
    this.Status = options.Status || '';
    this.MoreMes = options.MoreMes || '';
    this.position = options.position || '';
  }
}

/**
 * Apply申请信息类列表
 */
export class ApplyList extends NorDataList<Apply> {

  constructor(options: {
    _Items?: Array<Apply>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Apply(item));
      }
    }
  }
}


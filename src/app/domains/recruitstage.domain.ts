
/*****************************************************************************
 *
 * 作   者: 亢远露 * 创建时间: 2020/12/15 11:04:37 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * 招聘阶段
 */
export class RecruitStage extends DataPacket {
  RecruitStageId: number; // id
  StartScreen: number; // 初始阶段
  FirstScreen: number; // 初筛通过
  SeconScreen: number; // 初试通过
  LastScreen: number; // 复试通过

  constructor(options: {
    RecruitStageId?: number;
    StartScreen?: number;
    FirstScreen?: number;
    SeconScreen?: number;
    LastScreen?: number;
  } = {}) {
    super();
    this.RecruitStageId = !options.RecruitStageId ? 0 : Number.parseFloat(options.RecruitStageId.toString());
    this.StartScreen = !options.StartScreen ? 0 : Number.parseFloat(options.StartScreen.toString());
    this.FirstScreen = !options.FirstScreen ? 0 : Number.parseFloat(options.FirstScreen.toString());
    this.SeconScreen = !options.SeconScreen ? 0 : Number.parseFloat(options.SeconScreen.toString());
    this.LastScreen = !options.LastScreen ? 0 : Number.parseFloat(options.LastScreen.toString());
  }
}

/**
 * 招聘阶段列表
 */
export class RecruitStageList extends NorDataList<RecruitStage> {

  constructor(options: {
    _Items?: Array<RecruitStage>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new RecruitStage(item));
      }
    }
  }
}


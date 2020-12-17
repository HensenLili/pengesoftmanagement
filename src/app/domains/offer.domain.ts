
/*****************************************************************************
 *
 * 作   者: 亢远露 * 创建时间: 2020/12/16 21:44:02 *
 * Copyright (C) 2008 - 鹏业软件公司
 *
 *****************************************************************************/

import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

/**
 * offer发送信息
 */
export class Offer extends DataPacket {
  OfferId: number; // offer编号
  ResumeId: string; // 接收简历id
  title: string; // offer标题
  Message: string; // offer信息
  SendTime: Date | string; // offer发送日期
  SendMail: string; // offer发送邮箱
  RecieveMail: string; // offer接收邮箱
  OfferFile: string; // offer附件

  constructor(options: {
    OfferId?: number;
    ResumeId?: string;
    title?: string;
    Message?: string;
    SendTime?: Date | string;
    SendMail?: string;
    RecieveMail?: string;
    OfferFile?: string;
  } = {}) {
    super();
    this.OfferId = !options.OfferId ? 0 : Number.parseFloat(options.OfferId.toString());
    this.ResumeId = options.ResumeId || '';
    this.title = options.title || '';
    this.Message = options.Message || '';
    this.SendTime = this.newDate(options.SendTime);
    this.SendMail = options.SendMail || '';
    this.RecieveMail = options.RecieveMail || '';
    this.OfferFile = options.OfferFile || '';
  }
}

/**
 * offer发送信息列表
 */
export class OfferList extends NorDataList<Offer> {

  constructor(options: {
    _Items?: Array<Offer>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Offer(item));
      }
    }
  }
}


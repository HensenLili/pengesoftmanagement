
import {DataPacket, NorDataList} from 'pengesoft-ng-lib';

export class RegularRecord extends DataPacket {
  RegularId: number; // 记录id
  StaffId: string; // 员工id
  OperatorId: string; // 操作人id
  RegularTime: Date | string; // 转正时间
  RegularImg: string; // 转正申请文件

  constructor(options: {
    RegularId?: number;
    StaffId?: string;
    OperatorId?: string;
    RegularTime?: Date | string;
    RegularImg?: string;
  } = {}) {
    super();
    this.RegularId = !options.RegularId ? 0 : Number.parseFloat(options.RegularId.toString());
    this.StaffId = options.StaffId || '';
    this.OperatorId = options.OperatorId || '';
    this.RegularTime = this.newDate(options.RegularTime);
    this.RegularImg = options.RegularImg || '';
  }
}

/**
 * 列表
 */
export class RegularRecordList extends NorDataList<RegularRecord> {

  constructor(options: {
    _Items?: Array<RegularRecord>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new RegularRecord(item));
      }
    }
  }
}

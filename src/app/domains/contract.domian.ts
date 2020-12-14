import { DataPacket, QueryDataList } from 'pengesoft-ng-lib';

export class Contract extends DataPacket {
  /**
   * id.
   */
  ContracId: string;
  /**
   * 员工id.
   */
  StaffId: string;
  /**
   * 合同编号.
   */
  Number: string;
  /**
   * 合同年限.
   */
  ConTractTime: string;
  /**
   * 合同类型.
   */
  Type: string;
  /**
   * 签署日期.
   */
  SignTime: Date | undefined;
  /**
   * 合同状态.
   */
  Status: number;
  /**
   * 合同图片.
   */
  Img: string;
  /**
   * 生效时间.
   */
  EfficacyTime: Date | undefined;
  /**
   * 失效时间.
   */
  LoseEfficacyTime: Date | undefined;

  constructor(options: any | {
    ContracId?: string;
    StaffId?: string;
    Number?: string;
    ConTractTime?: string;
    Type?: string;
    SignTime?: Date | undefined;
    Status?: number;
    Img?: string;
    EfficacyTime?: Date | undefined;
    LoseEfficacyTime?: Date | undefined;
  } = {}) {
    super();
    this.ContracId = options.ContracId || '';
    this.StaffId = options.StaffId || '';
    this.Number = options.Number || '';
    this.ConTractTime = options.ConTractTime || '';
    this.Type = options.Type || '';
    this.SignTime = this.newDate(options.SignTime);
    this.Status = !options.Status ? 0 : Number.parseFloat(options.Status.toString());
    this.Img = options.Img || '';
    this.EfficacyTime = this.newDate(options.EfficacyTime);
    this.LoseEfficacyTime = this.newDate(options.LoseEfficacyTime);
  }
}


export class ContractList extends QueryDataList<Contract> {

  constructor(options: any | {
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
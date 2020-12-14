import { DataPacket, QueryDataList } from 'pengesoft-ng-lib';
import { Staff } from './staff.domain';

export class Result extends DataPacket {
  /**
   * 返回码.
   */
  code: number;
  /**
   * 返回信息.
   */
  message: string;
  /**
   * 返回数据.
   */
  data: Array<any>;

  constructor(options: any | {
    code?: number;
    message?: string;
    data?: Object;
  } = {}) {
    super();
    this.code = !options.code ? 0 : Number.parseFloat(options.code.toString());
    this.message = options.message || '';
    this.data = options.data || [];
  }
}



export class ResultList extends QueryDataList<Result> {

  constructor(options: any | {
    _Items?: Array<Result>
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new Result(item));
      }
    }
  }
}
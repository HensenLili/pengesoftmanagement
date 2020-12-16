// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
import {TransferRecord} from '../domains/transferrecord.domain';
import {Result} from '../domains/result.domain';

/**
 * TransferRecordServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class TransferRecordServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'TransferRecordServiceSvr.assx/';
  }

  /**
   *
   */
  addTransferRecord(transferRecord: TransferRecord): Promise<Result>{
    const httpParams = new HttpParams()
      .append('transferRecord', transferRecord.toString());
    return this.request.post<Result>(this.baseUrl + 'addTransferRecord', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByCondition(staffName: string, operatorName: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staffName', staffName.toString())
      .append('operatorName', operatorName.toString());
    return this.request.post<Result>(this.baseUrl + 'findByCondition', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  GetVersion(): Promise<string>{
    const httpParams = new HttpParams();
    return this.request.post<string>(this.baseUrl + 'GetVersion', httpParams).then((res) => {
      return res;
    });
  }

  /**
   *
   */
  updateTransferRecord(transferRecord: TransferRecord): Promise<Result>{
    const httpParams = new HttpParams()
      .append('transferRecord', transferRecord.toString());
    return this.request.post<Result>(this.baseUrl + 'updateTransferRecord', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findTransferFile(staffId: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staffId', staffId.toString());
    return this.request.post<Result>(this.baseUrl + 'findTransferFile', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

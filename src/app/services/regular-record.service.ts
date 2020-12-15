// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
import {RegularRecord} from '../domains/regularrecord.domain';
import {Result} from '../domains/result.domain';

/**
 * RegularRecordServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class RegularRecordServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'RegularRecordServiceSvr.assx/';
  }

  /**
   * 
   */
  findAllRegular(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'findAllRegular', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   * 
   */
  addRegular(regularRecord: RegularRecord): Promise<Result>{
    const httpParams = new HttpParams()
      .append('regularRecord', regularRecord.toString());
    return this.request.post<Result>(this.baseUrl + 'addRegular', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   * 
   */
  updateRegular(regularRecord: RegularRecord): Promise<Result>{
    const httpParams = new HttpParams()
      .append('regularRecord', regularRecord.toString());
    return this.request.post<Result>(this.baseUrl + 'updateRegular', httpParams).then((res) => {
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
}

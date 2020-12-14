// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
import {Staff} from '../domains/staff.domain';
import {Result} from '../domains/result.domain';

/**
 * StaffServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class StaffServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'StaffServiceSvr.assx/';
  }

  /**
   * 
   */
  addStaff(staff: Staff): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staff', staff.toString());
    return this.request.post<Result>(this.baseUrl + 'addStaff', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   * 
   */
  findByCondition(staff: Staff, NodeId: number): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staff', staff.toString())
      .append('NodeId', NodeId.toString());
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
  findAllStaff(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'findAllStaff', httpParams).then((res) => {
      return new Result(res);
    });
    
  }

  /**
   * 
   */
  updateStaff(staff: Staff): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staff', staff.toString());
    return this.request.post<Result>(this.baseUrl + 'updateStaff', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

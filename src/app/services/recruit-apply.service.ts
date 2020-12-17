// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
import {Apply} from '../domains/apply.domain';
import {Result} from '../domains/result.domain';

/**
 * ApplyServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class ApplyServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'ApplyServiceSvr.assx/';
  }

  /**
   *
   */
  dealApply(applyId: number, status: string, moreMes: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('applyId', applyId.toString())
      .append('status', status.toString())
      .append('moreMes', moreMes.toString());
    return this.request.post<Result>(this.baseUrl + 'dealApply', httpParams).then((res) => {
      return new Result(res);
    });
  }

  dealRemarks(id: number, remarks: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('id', id.toString())
      .append('remarks', remarks.toString());
    return this.request.post<Result>(this.baseUrl + 'dealRemarks', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainByStatus(status: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('status', status.toString());
    return this.request.post<Result>(this.baseUrl + 'gainByStatus', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  addApply(apply: Apply): Promise<Result>{
    const httpParams = new HttpParams()
      .append('apply', apply.toString());
    return this.request.post<Result>(this.baseUrl + 'addApply', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainByUserId(applyId: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('applyId', applyId.toString());
    return this.request.post<Result>(this.baseUrl + 'gainByUserId', httpParams).then((res) => {
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
  gainByApprovalId(approvalId: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('approvalId', approvalId.toString());
    return this.request.post<Result>(this.baseUrl + 'gainByApprovalId', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  sendApply(id: string, applyId: number): Promise<Result>{
    const httpParams = new HttpParams()
      .append('id', id.toString())
      .append('applyId', applyId.toString());
    return this.request.post<Result>(this.baseUrl + 'sendApply', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainApply(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainApply', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  deleteApply(applyId: number): Promise<Result>{
    const httpParams = new HttpParams()
      .append('applyId', applyId.toString());
    return this.request.post<Result>(this.baseUrl + 'deleteApply', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainByUserName(UserName: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('UserName', UserName.toString());
    return this.request.post<Result>(this.baseUrl + 'gainByUserName', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  updateApply(apply: Apply): Promise<Result>{
    const httpParams = new HttpParams()
      .append('apply', apply.toString());
    return this.request.post<Result>(this.baseUrl + 'updateApply', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainByApprovalName(approvalName: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('approvalName', approvalName.toString());
    return this.request.post<Result>(this.baseUrl + 'gainByApprovalName', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

export class RecruitApplyService {
}

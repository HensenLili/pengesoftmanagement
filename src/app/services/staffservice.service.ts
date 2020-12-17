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
  findCount(workNature: number, workStatus: number, nodeId: number, age: number, degree: string, positionId: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('workNature', workNature.toString())
      .append('workStatus', workStatus.toString())
      .append('nodeId', nodeId.toString())
      .append('age', age.toString())
      .append('degree', degree.toString())
      .append('positionId', positionId.toString());
    return this.request.post<Result>(this.baseUrl + 'findCount', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  addStaff(staff: Staff, headImg: File): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staff', staff.toString())
      .append('headImg', headImg.toString());
    return this.request.post<Result>(this.baseUrl + 'addStaff', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  updateStaffPosition(staffId: string, positionId: number): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staffId', staffId.toString())
      .append('positionId', positionId.toString());
    return this.request.post<Result>(this.baseUrl + 'updateStaffPosition', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByCondition(staff: Staff, departmentName: string, positionName: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staff', staff.toString())
      .append('departmentName', departmentName.toString())
      .append('positionName', positionName.toString());
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
  makeStaffRegular(staffId: string, date: string, file: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staffId', staffId.toString())
    formData.append('date', date)
    formData.append('memoryFile', file);
    return this.request.post<Result>(this.baseUrl + 'makeStaffRegular', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  makeStaffJobTransfer(staffId: string, date: string, transferType: number, beforeId: string, afterId: string, transferFile: File, salaryFile: File): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staffId', staffId.toString())
      .append('date', date.toString())
      .append('transferType', transferType.toString())
      .append('beforeId', beforeId.toString())
      .append('afterId', afterId.toString())
      .append('transferFile', transferFile.toString())
      .append('salaryFile', salaryFile.toString());
    return this.request.post<Result>(this.baseUrl + 'makeStaffJobTransfer', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  makeStaffLeave(staffId: string, date: string, leaveFile: File, leaveApply: File, leaveDeclare: File, productTransfer: File, leaveProve: File): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staffId', staffId.toString())
      .append('date', date.toString())
      .append('leaveFile', leaveFile.toString())
      .append('leaveApply', leaveApply.toString())
      .append('leaveDeclare', leaveDeclare.toString())
      .append('productTransfer', productTransfer.toString())
      .append('leaveProve', leaveProve.toString());
    return this.request.post<Result>(this.baseUrl + 'makeStaffLeave', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  updateStaff(staff: Staff, headImg: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staff', staff.toString())
    formData.append('headImg', headImg);
    return this.request.post<Result>(this.baseUrl + 'updateStaff', formData).then((res) => {
      return new Result(res);
    });
  }
}

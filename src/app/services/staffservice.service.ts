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
    const formData = new FormData()
    formData.append('staff', staff.toString())
    formData.append('headImg', headImg);
    return this.request.post<Result>(this.baseUrl + 'addStaff', formData).then((res) => {
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
  makeStaffEntry(staffId: string, date: string, entryFile: File, sureEntryFile: File, sureSalaryFile: File, internshipFile: File, secrecyFile: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staffId', staffId.toString())
    formData.append('date', date.toString())
    formData.append('entryFile', entryFile)
    formData.append('sureEntryFile', sureEntryFile)
    formData.append('sureSalaryFile', sureSalaryFile)
    formData.append('internshipFile', internshipFile)
    formData.append('secrecyFile', secrecyFile);
    return this.request.post<Result>(this.baseUrl + 'makeStaffEntry', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  makeStaffJobTransfer(staffId: string, date: string, transferType: number, beforeId: string, afterId: string, transferFile: File, salaryFile: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staffId', staffId.toString())
    formData.append('date', date.toString())
    formData.append('transferType', transferType.toString())
    formData.append('beforeId', beforeId.toString())
    formData.append('afterId', afterId.toString())
    formData.append('transferFile', transferFile)
    formData.append('salaryFile', salaryFile);
    return this.request.post<Result>(this.baseUrl + 'makeStaffJobTransfer', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  makeStaffRegular(staffId: string, date: string, regularFile: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staffId', staffId.toString())
    formData.append('date', date.toString())
    formData.append('regularFile', regularFile);
    return this.request.post<Result>(this.baseUrl + 'makeStaffRegular', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  makeStaffLeave(staffId: string, date: string, leaveFile: File, leaveApply: File, leaveDeclare: File, productTransfer: File, leaveProve: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staffId', staffId.toString())
    formData.append('date', date.toString())
    formData.append('leaveFile', leaveFile)
    formData.append('leaveApply', leaveApply)
    formData.append('leaveDeclare', leaveDeclare)
    formData.append('productTransfer', productTransfer)
    formData.append('leaveProve', leaveProve);
    return this.request.post<Result>(this.baseUrl + 'makeStaffLeave', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  updateStaff(staff: Staff, headFile: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staff', staff.toString())
    formData.append('headFile', headFile);
    return this.request.post<Result>(this.baseUrl + 'updateStaff', formData).then((res) => {
      return new Result(res);
    });
  }
}

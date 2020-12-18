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
    const formdata = new FormData()
    formdata.append('workNature', workNature.toString())
    formdata.append('workStatus', workStatus.toString())
    formdata.append('nodeId', nodeId.toString())
    formdata.append('age', age.toString())
    formdata.append('degree', degree)
    formdata.append('positionId', positionId);
    return this.request.post<Result>(this.baseUrl + 'findCount', formdata).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  addStaff(staff: Staff, headImg: File): Promise<Result>{
    const formdata = new FormData()
    formdata .append('staff', staff.toString())
    formdata.append('headImg', headImg.toString());
    return this.request.post<Result>(this.baseUrl + 'addStaff', formdata).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  updateStaffPosition(staffId: string, positionId: number): Promise<Result>{
    const formdata = new FormData()
    formdata .append('staffId', staffId)
    formdata.append('positionId', positionId.toString());
    return this.request.post<Result>(this.baseUrl + 'updateStaffPosition', formdata).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByCondition(staff: Staff, departmentName: string, positionName: string): Promise<Result>{
    const formdata = new FormData()
    formdata.append('staff', staff.toString())
    formdata.append('departmentName', departmentName)
    formdata .append('positionName', positionName);
    return this.request.post<Result>(this.baseUrl + 'findByCondition', formdata).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  GetVersion(): Promise<string>{
    const formdata = new FormData();
    return this.request.post<string>(this.baseUrl + 'GetVersion', formdata).then((res) => {
      return res;
    });
  }

  /**
   *
   */
  findAllStaff(): Promise<Result>{
    const formdata = new FormData();
    return this.request.post<Result>(this.baseUrl + 'findAllStaff', formdata).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  makeStaffRegular(staffId: string, date: string, file: File): Promise<Result>{
    const formData = new FormData()
    formData.append('staffId', staffId)
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
    const formdata = new FormData()
    formdata.append('staffId', staffId)
    formdata.append('date', date)
    formdata.append('transferType', transferType.toString())
    formdata.append('beforeId', beforeId)
    formdata.append('afterId', afterId)
    formdata.append('transferFile', transferFile)
    formdata.append('salaryFile', salaryFile);
    return this.request.post<Result>(this.baseUrl + 'makeStaffJobTransfer', formdata).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  makeStaffLeave(staffId: string, date: string, leaveFile: File, leaveApply: File, leaveDeclare: File, productTransfer: File, leaveProve: File): Promise<Result>{
    const formdata = new FormData()
      formdata.append('staffId', staffId)
      formdata.append('date', date)
      formdata.append('leaveFile', leaveFile)
      formdata.append('leaveApply', leaveApply)
      formdata.append('leaveDeclare', leaveDeclare)
      formdata.append('productTransfer', productTransfer)
      formdata.append('leaveProve', leaveProve);
    return this.request.post<Result>(this.baseUrl + 'makeStaffLeave', formdata).then((res) => {
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

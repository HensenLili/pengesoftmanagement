// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
import {WorkExperience} from '../domains/workexperience.domain';
import {Result} from '../domains/result.domain';

/**
 * WorkExperienceServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class WorkExperienceServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'WorkExperienceServiceSvr.assx/';
  }

  /**
   *
   */
  updateExperience(workExperience: WorkExperience): Promise<Result>{
    const httpParams = new HttpParams()
      .append('workExperience', workExperience.toString());
    return this.request.post<Result>(this.baseUrl + 'updateExperience', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  addExperience(workExperience: WorkExperience): Promise<Result>{
    const httpParams = new HttpParams()
      .append('workExperience', workExperience.toString());
    return this.request.post<Result>(this.baseUrl + 'addExperience', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findAllExperience(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'findAllExperience', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByCondition(workExperience: WorkExperience): Promise<Result>{
    const httpParams = new HttpParams()
      .append('workExperience', workExperience.toString());
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
  findByStaffId(workExperience: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('workExperience', workExperience.toString());
    return this.request.post<Result>(this.baseUrl + 'findByStaffId', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

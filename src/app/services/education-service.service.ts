// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
import {Education} from '../domains/education.domain';
import {Result} from '../domains/result.domain';

/**
 * EducationServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class EducationServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'EducationServiceSvr.assx/';
  }

  /**
   *
   */
  addEducation(education: Education, educationFile:File): Promise<Result>{
    const formData = new FormData()
    formData.append('education', education.toString())
    formData.append('educationFile', educationFile);
    return this.request.post<Result>(this.baseUrl + 'addEducation', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByCondition(education: Education): Promise<Result>{
    const httpParams = new HttpParams()
      .append('education', education.toString());
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
  findAllEducation(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'findAllEducation', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  updateEducation(education: Education, educationFile: File): Promise<Result>{
    const httpParams = new HttpParams()
      .append('education', education.toString())
      .append('educationFile', educationFile.toString());
    return this.request.post<Result>(this.baseUrl + 'updateEducation', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByStaffId(staffId: number): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staffId', staffId.toString());
    return this.request.post<Result>(this.baseUrl + 'findByStaffId', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

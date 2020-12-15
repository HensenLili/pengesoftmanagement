// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
// import {MemoryFile} from '../domains/memoryfile.domain';
import {Result} from '../domains/result.domain';
import {Resume} from '../domains/resume.domain';

/**
 * ResumeServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class ResumeServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'ResumeServiceSvr.assx/';
  }

  /**
   *
   */
  gainByName(name: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('name', name.toString());
    return this.request.post<Result>(this.baseUrl + 'gainByName', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainById(id: number): Promise<Result>{
    const httpParams = new HttpParams()
      .append('id', id.toString());
    return this.request.post<Result>(this.baseUrl + 'gainById', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainOfferAnalysis(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainOfferAnalysis', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainByYear(name: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('name', name.toString());
    return this.request.post<Result>(this.baseUrl + 'gainByYear', httpParams).then((res) => {
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
  gainResumeMes(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainResumeMes', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainResume(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainResume', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  // addResume(resume: Resume, memoryFile: MemoryFile): Promise<Result>{
  //   const httpParams = new HttpParams()
  //     .append('resume', resume.toString())
  //     .append('memoryFile', memoryFile.toString());
  //   return this.request.post<Result>(this.baseUrl + 'addResume', httpParams).then((res) => {
  //     return new Result(res);
  //   });
  // }

  /**
   *
   */
  // updateResume(resume: Resume, memoryFile: MemoryFile): Promise<Result>{
  //   const httpParams = new HttpParams()
  //     .append('resume', resume.toString())
  //     .append('memoryFile', memoryFile.toString());
  //   return this.request.post<Result>(this.baseUrl + 'updateResume', httpParams).then((res) => {
  //     return new Result(res);
  //   });
  // }
}

export class RecruitresumeService {
}

export class RecruitresumeServiceSvr {
}

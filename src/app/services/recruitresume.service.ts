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
  gainResumeByStage(mes: string, order: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('mes', mes.toString())
      .append('order', order.toString());
    return this.request.post<Result>(this.baseUrl + 'gainResumeByStage', httpParams).then((res) => {
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

  // 简历库数据查询排序
  gainResumeAllBy(colunmName: string, mes: string, order: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('colunmName', colunmName.toString())
      .append('mes', mes.toString())
      .append('order', order.toString())
    return this.request.post<Result>(this.baseUrl + 'gainResumeAllBy', httpParams).then((res) => {
      return new Result(res);
    });
  }
  // 查询待入职数据
  gainAllPass1(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainAllPass1', httpParams).then((res) => {
      return new Result(res);
    });
  }

  gainFileById(id: number): string {
    const httpParams = new HttpParams()
      .append('id', id.toString());
    return this.request.file(this.baseUrl + 'gainFileById', httpParams);
}


  // gainFileById(id: number): Promise<memoryFile>{
  //   const httpParams = new HttpParams()
  //     .append('id', id.toString());
  //   return this.request.post<MemoryFile>(this.baseUrl + 'gainFileById', httpParams).then((res) => {
  //     return new MemoryFile(res);
  //   });
  // }
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
  gainOfferAnalysis(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainOfferAnalysis', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainResumeMes(order: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('order', order.toString());
    return this.request.post<Result>(this.baseUrl + 'gainResumeMes', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  gainResumeByOut(order: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('order', order.toString());
    return this.request.post<Result>(this.baseUrl + 'gainResumeByOut', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  addResume(resume: Resume, memoryFile: File): Promise<Result>{
      const formData = new FormData();
      formData.append('resume', resume.toString());
      formData.append('memoryFile', memoryFile.toString());
      formData.append('memoryFile',memoryFile);
    return this.request.post<Result>(this.baseUrl + 'addResume', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  addResume1(resume: Resume): Promise<Result>{
    const httpParams = new HttpParams()
      .append('resume', resume.toString());
    return this.request.post<Result>(this.baseUrl + 'addResume1', httpParams).then((res) => {
      return new Result(res);
    });
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
  GetVersion(): Promise<string>{
    const httpParams = new HttpParams();
    return this.request.post<string>(this.baseUrl + 'GetVersion', httpParams).then((res) => {
      return res;
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
  updateResume(resume: Resume, memoryFile: File): Promise<Result>{
    const httpParams = new HttpParams()
      .append('resume', resume.toString())
      .append('memoryFile', memoryFile.toString());
    return this.request.post<Result>(this.baseUrl + 'updateResume', httpParams).then((res) => {
      return new Result(res);
    });
  }
  /*
  *
  * 查找所有通过的信息
  * */
  gainAllPass(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainAllPass', httpParams).then((res) => {
      return new Result(res);
    });
  }

  updateResumeStatus(id: number, status: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('id', id.toString())
      .append('status', status.toString());
    return this.request.post<Result>(this.baseUrl + 'updateResumeStatus', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  // gainResumeBy(colunmName: string, mes: string, order: string): Promise<Result>{
  //   const httpParams = new HttpParams()
  //     .append('colunmName', colunmName.toString())
  //     .append('mes', mes.toString())
  //     .append('order', order.toString());
  //   return this.request.post<Result>(this.baseUrl + 'gainResumeBy', httpParams).then((res) => {
  //     return new Result(res);
  //   });
  // }

  gainResumeBy(colunmName: string, mes: string, order: string, stage: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('colunmName', colunmName.toString())
      .append('mes', mes.toString())
      .append('order', order.toString())
      .append('stage', stage.toString());
    return this.request.post<Result>(this.baseUrl + 'gainResumeBy', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
import {Contract} from '../domains/contract.domain';
import {Result} from '../domains/result.domain';

/**
 * ContractServiceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class ContractServiceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'ContractServiceSvr.assx/';
  }

  /**
   * 
   */
  addContract(contract: Contract, memoryFile:File): Promise<Result>{
    const formData = new FormData()
    formData.append('contract', contract.toString())
    formData .append('memoryFile', memoryFile);
    return this.request.post<Result>(this.baseUrl + 'addContract', formData).then((res) => {
      return new Result(res);
    });
  }

  /**
   * 
   */
  findByCondition(contract?: Contract, staffName?: string, positionName?: string, yearRange?: number): Promise<Result>{
    const httpParams = new HttpParams()
      .append('contract', contract.toString())
      .append('staffName', staffName.toString())
      .append('positionName', positionName.toString())
      .append('yearRange', yearRange.toString());
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
  updateContract(Contract: Contract): Promise<Result>{
    const httpParams = new HttpParams()
      .append('Contract', Contract.toString());
    return this.request.post<Result>(this.baseUrl + 'updateContract', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   * 
   */
  findAllContract(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'findAllContract', httpParams).then((res) => {
      return new Result(res);
    });
  }

  /**
   * 
   */
  findByStaffId(staffId: string): Promise<Result>{
    const httpParams = new HttpParams()
      .append('staffId', staffId.toString());
    return this.request.post<Result>(this.baseUrl + 'findByStaffId', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

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
  addContract(contract: Contract, memoryFile: File): Promise<Result>{
    const formData = new FormData()
    formData .append('contract', contract.toString())
    formData .append('memoryFile', memoryFile);
    return this.request.post<Result>(this.baseUrl + 'addContract', formData ).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByCondition(contract: Contract, staffName: string, positionName: string, yearRange: number): Promise<Result>{
    const formData = new FormData()
    formData.append('contract', contract.toString())
    formData.append('staffName', staffName)
    formData.append('positionName', positionName)
    formData.append('yearRange', yearRange.toString());
    return this.request.post<Result>(this.baseUrl + 'findByCondition', formData).then((res) => {
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
  updateContract(Contract: Contract, contractFile: File): Promise<Result>{
    const formData  = new FormData()
    formData .append('Contract', Contract.toString())
    formData .append('contractFile', contractFile);
    return this.request.post<Result>(this.baseUrl + 'updateContract', formData ).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findAllContract(): Promise<Result>{
    const formdata = new FormData();
    return this.request.post<Result>(this.baseUrl + 'findAllContract', formdata).then((res) => {
      return new Result(res);
    });
  }

  /**
   *
   */
  findByStaffId(staffId: string): Promise<Result>{
    const formdata= new FormData()
      formdata.append('staffId', staffId.toString());
    return this.request.post<Result>(this.baseUrl + 'findByStaffId', formdata).then((res) => {
      return new Result(res);
    });
  }
}

// Angular Version 6 below need to be deleted {providedIn: 'root'}

// angular
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
// owner
import {Request} from 'pengesoft-ng-lib';
// models
// import {MemoryFile} from '../domains/memoryfile.domain';
import {Offer} from '../domains/offer.domain';
import {Result} from '../domains/result.domain';

/**
 * OfferSerivceSvr
 */
@Injectable({
  providedIn: 'root'
})
export class OfferSerivceSvr {
  baseUrl: string;

  constructor(
    private request: Request
  ){
    this.baseUrl = 'OfferSerivceSvr.assx/';
  }

  /**
   *
   */
  addOffer(offer: Offer, memoryFile: File): Promise<Result>{
    const formData = new FormData();
      formData.append('offer', offer.toString());
      formData.append('memoryFile', memoryFile.toString());
      formData.append('memoryFile',memoryFile);
    return this.request.post<Result>(this.baseUrl + 'addOffer', formData).then((res) => {
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
  gainOffer(): Promise<Result>{
    const httpParams = new HttpParams();
    return this.request.post<Result>(this.baseUrl + 'gainOffer', httpParams).then((res) => {
      return new Result(res);
    });
  }
}

import {Component, Injector, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CoreComponent} from "pengesoft-ng-lib";
import { ResumeServiceSvr } from "../../services/recruitresume.service";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import '@angular/compiler';
// import any = jasmine.any;
// import { Resume } from "../../domains/resumemes.domain";

@Component({
  selector: 'app-recruit-resume-show',
  templateUrl: './recruit-resume-show.component.html',
  styleUrls: ['./recruit-resume-show.component.less']
})
export class RecruitResumeShowComponent extends CoreComponent implements OnInit {
  public itemResume = {};
  item = [];
  getOneData = [];
  public accessoryFileSrc: SafeResourceUrl;
  constructor(
    private route: ActivatedRoute,
    private injector: Injector,
    private getResumeSvr: ResumeServiceSvr,
    private domSanitizer: DomSanitizer,

  ) {
    super(injector);
  }

  ngOnInit(): void {
    // this.getUrlData();
    this.getFile();
    this.getDataById();
  }

  getDataById():void{
    this.route.queryParams.subscribe(p => {
      console.log(p);
      const Id =Number(p.id);
      this.getResumeSvr.gainById(Id).then(res=>{
        console.log(res);
        this.getOneData.push(res.data);
        console.log(this.getOneData);
      })
    })
  }

  //获取简历路径 展示简历
  getFile(): void{
    this.route.queryParams.subscribe(p => {
      console.log(p);
      const Id =Number(p.id);
      this.accessoryFileSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.getResumeSvr.gainFileById(Id));
      console.log(this.accessoryFileSrc);
    })
  }
}

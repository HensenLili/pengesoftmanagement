import {Component, Injector, Input, OnInit} from '@angular/core';
import {
  CoreComponent,
  DataDictionary,
  DataDictionaryList,
  DataDictionaryService,
  Dynamic,
  IQuickLinkModal,
  TabView
} from 'pengesoft-ng-lib';

@Component({
  selector: 'app-my-tab-view',
  templateUrl: './my-tab-view.component.html',
  styleUrls: ['./my-tab-view.component.less']
})
@TabView('我的tab', {isSingle: false})
@Dynamic()
export class MyTabViewComponent
  extends CoreComponent
  implements OnInit, IQuickLinkModal {
  @Input() titleName: string;

  dataDictionaryList: DataDictionaryList = new DataDictionaryList();
  pickedDataDictionary: DataDictionary;

  constructor(
    private injector: Injector,
    private dictionarySvr: DataDictionaryService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    console.log(this.titleName);

    this.dictionarySvr.query(this.loginAuthor.token, '', 0, 0, 0, -1).then(res => {
      this.dataDictionaryList = res;
    }, err => {
      this.nzMessageSvr.error(err.Msg);
    });
  }

  showDataDictionary(data: DataDictionary): void {
    this.pickedDataDictionary = data;
  }

  submit(): boolean | Promise<boolean> {
    return true;
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyHomeComponent} from './views/my-home/my-home.component';
import {PengesoftNgLibModule} from 'pengesoft-ng-lib';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {registerLocaleData} from '@angular/common';

import zh from '@angular/common/locales/zh';
import {MyTabViewComponent} from './views/my-tab-view/my-tab-view.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { ContainerComponent } from './views/container/container.component';
import { OrganizeManageComponent } from './views/organize-manage/organize-manage.component';
import { RecruitManageComponent } from './views/recruit-manage/recruit-manage.component';
import { TrainingManageComponent } from './views/training-manage/training-manage.component';
import { StaffManageComponent } from './views/staff-manage/staff-manage.component';
import { AwardpunishManageComponent } from './views/awardpunish-manage/awardpunish-manage.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {FormsModule} from "@angular/forms";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { StaffRosterComponent } from './components/staff-roster/staff-roster.component';
import { StaffContractComponent } from './components/staff-contract/staff-contract.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RecruitDemandComponent } from './components/recruit-demand/recruit-demand.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyTabViewComponent,
    ContainerComponent,
    OrganizeManageComponent,
    RecruitManageComponent,
    TrainingManageComponent,
    StaffManageComponent,
    AwardpunishManageComponent,
    StaffRosterComponent,
    StaffContractComponent,
    RecruitDemandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PengesoftNgLibModule.forRoot(),
    NzMessageModule,
    NzModalModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzSwitchModule,
    NzGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

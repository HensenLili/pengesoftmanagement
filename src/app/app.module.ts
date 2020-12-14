import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyHomeComponent} from './views/my-home/my-home.component';
import {PengesoftNgLibModule} from 'pengesoft-ng-lib';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzModalModule} from 'ng-zorro-antd/modal';
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
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { StaffRosterComponent } from './components/staff-roster/staff-roster.component';
import { StaffContractComponent } from './components/staff-contract/staff-contract.component';
//引入头像模块
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
//引入按键模块
import { NzButtonModule } from 'ng-zorro-antd/button';
//引入小图标模块
import { NzIconModule } from 'ng-zorro-antd/icon';
//引入下拉菜单模块
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
//引入表格
import { NzTableModule } from 'ng-zorro-antd/table';
//引入表单
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//引入标签页模块
import { NzTabsModule } from 'ng-zorro-antd/tabs';
//引入表单模块
import { NzFormModule } from 'ng-zorro-antd/form';
//引入时间轴模块
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
//引入选择器模块
import { NzSelectModule } from 'ng-zorro-antd/select';
//引入输入框模块
import { NzInputModule } from 'ng-zorro-antd/input';
import { StaffEmployeeComponent } from './components/staff-employee/staff-employee.component';
import { StaffBasicInforComponent } from './components/staff-basic-infor/staff-basic-infor.component';
import { StaffExperienceComponent } from './components/staff-experience/staff-experience.component';
import { StaffGrowRecordComponent } from './components/staff-grow-record/staff-grow-record.component';
import { StaffCertificateComponent } from './components/staff-certificate/staff-certificate.component';
import { StaffEntryComponent } from './components/staff-entry/staff-entry.component';
import { StaffFormalComponent } from './components/staff-formal/staff-formal.component';
import { StaffFormalModalComponent } from './components/staff-formal-modal/staff-formal-modal.component';
import { StaffMoveComponent } from './components/staff-move/staff-move.component';
import { StaffMoveModalComponent } from './components/staff-move-modal/staff-move-modal.component';
import { StaffLeaveComponent } from './components/staff-leave/staff-leave.component';
import { StaffLeaveModalComponent } from './components/staff-leave-modal/staff-leave-modal.component';
import { StaffMoveHistoryComponent } from './components/staff-move-history/staff-move-history.component';
import { StaffBasicChangeComponent } from './components/staff-basic-change/staff-basic-change.component';
import { StaffContractRenewComponent } from './components/staff-contract-renew/staff-contract-renew.component';
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
    StaffEmployeeComponent,
    StaffBasicInforComponent,
    StaffExperienceComponent,
    StaffGrowRecordComponent,
    StaffCertificateComponent,
    StaffEntryComponent,
    StaffFormalComponent,
    StaffFormalModalComponent,
    StaffMoveComponent,
    StaffMoveModalComponent,
    StaffLeaveComponent,
    StaffLeaveModalComponent,
    StaffMoveHistoryComponent,
    StaffBasicChangeComponent,
    StaffContractRenewComponent,
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
    NzAvatarModule,
    NzButtonModule,
    NzDropDownModule,
    NzTableModule ,
    FormsModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzTimelineModule ,
    NzSelectModule,
    NzInputModule,
    NzFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

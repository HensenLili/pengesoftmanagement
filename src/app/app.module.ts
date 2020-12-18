import {BrowserModule} from '@angular/platform-browser';
import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyHomeComponent} from './views/my-home/my-home.component';
import {PengesoftNgLibModule} from 'pengesoft-ng-lib';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {registerLocaleData} from '@angular/common';
import {CommonModule} from '@angular/common';
import {NgxEchartsModule} from "ngx-echarts";
import zh from '@angular/common/locales/zh';
import {MyTabViewComponent} from './views/my-tab-view/my-tab-view.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { EmployeesComponent } from './components/employees/employees.component';
// import { RosterComponent } from './components/roster/roster.component';
import { RecruitInterviewComponent } from './components/recruit-interview/recruit-interview.component';
import { RecruitNeedslistComponent } from './components/recruit-needslist/recruit-needslist.component';
import { RecruitNeedsTableComponent } from './components/recruit-needs-table/recruit-needs-table.component';
// 导航模块
import { NzMenuModule } from 'ng-zorro-antd/menu';
// 搜索框模块
import { NzInputModule } from 'ng-zorro-antd/input';
// 招聘模块
// 引入招聘需求组件
import { RecruitManagementComponent } from './components/recruit-management/recruit-management.component';
// 引入人才库组件
import { RecruitTalentPoolComponent } from './components/recruit-talent-pool/recruit-talent-pool.component';
// 引入表格模块
import {NzTableModule} from 'ng-zorro-antd/table';
// 引入面包屑导航模块
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
// 引入select选择器模块
import { NzSelectModule } from 'ng-zorro-antd/select';
// 上传模块
import { NzUploadModule } from 'ng-zorro-antd/upload';
// 引入tab模块
import { NzTabsModule } from 'ng-zorro-antd/tabs';
// 引入头像模块
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
// 引入按键模块
import { NzButtonModule } from 'ng-zorro-antd/button';
// 引入小图标模块
import { NzIconModule } from 'ng-zorro-antd/icon';
// 引入栅栏模块
import {NzGridModule} from 'ng-zorro-antd/grid';
// 引入下拉菜单模块
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
// 引入抽屉模块
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
// 引入表单模块
import { NzFormModule } from 'ng-zorro-antd/form';
// 引入气泡卡片
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { RecruitApprovalComponent } from './components/recruit-approval/recruit-approval.component';
import { RecruitOfferComponent } from './components/recruit-offer/recruit-offer.component';
import { RouterModule } from "@angular/router";
import { ContainerComponent } from './views/container/container.component';
import { StaffManageComponent } from './views/staff-manage/staff-manage.component'
import { OrganizeManageComponent } from './views/organize-manage/organize-manage.component';
import { AwardpunishManageComponent } from './views/awardpunish-manage/awardpunish-manage.component';
import { RecruitManageComponent } from './views/recruit-manage/recruit-manage.component';
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { StaffRosterComponent } from './components/staff-roster/staff-roster.component';
import { StaffContractComponent } from './components/staff-contract/staff-contract.component';
import {RecruitDemandComponent} from './components/recruit-demand/recruit-demand.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
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
import { TrainingManageComponent } from './views/training-manage/training-manage.component'
// 引入卡片模块
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import {NzCalendarModule} from "ng-zorro-antd/calendar";
import {NzListModule} from "ng-zorro-antd/list";
import { StatementComponent } from './views/statement/statement.component';
import { StatementRecruitComponent } from './components/statement-recruit/statement-recruit.component';
import { StaffContractRenewModalComponent } from './components/staff-contract-renew-modal/staff-contract-renew-modal.component';
import { StaffContractChangeModalComponent } from './components/staff-contract-change-modal/staff-contract-change-modal.component';
import { StaffContractOverModalComponent } from './components/staff-contract-over-modal/staff-contract-over-modal.component';
import {StaffContractManageComponent} from "./components/staff-contract-manage/staff-contract-manage.component";
import { OrganizeUnitComponent } from './components/organize-unit/organize-unit.component';
import { OrganizeDepartmentComponent } from './components/organize-department/organize-department.component';
import { TrainingPlanComponent } from './components/training-plan/training-plan.component';
import { TrainingLogComponent } from './components/training-log/training-log.component';
import { AwardPunishModalComponent } from './components/award-punish-modal/award-punish-modal.component';
import { StaffAddModalComponent } from './components/staff-add-modal/staff-add-modal.component';
import {NzCascaderModule} from "ng-zorro-antd/cascader";


import { from } from 'rxjs';
import { RecruitResumeShowComponent } from './components/recruit-resume-show/recruit-resume-show.component';
import {NzToolTipModule} from "ng-zorro-antd/tooltip";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyTabViewComponent,
    EmployeesComponent,
    ContainerComponent,
    StaffManageComponent,
    OrganizeManageComponent,
    AwardpunishManageComponent,
    RecruitManageComponent,
    TrainingManageComponent,
    RecruitManagementComponent,
    RecruitTalentPoolComponent,
    RecruitInterviewComponent,
    RecruitNeedslistComponent,
    RecruitNeedsTableComponent,
    RecruitApprovalComponent,
    RecruitOfferComponent,
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
    StaffContractComponent,
    StaffContractManageComponent,
    RecruitResumeShowComponent,
    StatementComponent,
    StatementRecruitComponent,
    StaffContractRenewModalComponent,
    StaffContractChangeModalComponent,
    StaffContractOverModalComponent,
    StaffContractManageComponent,
    OrganizeUnitComponent,
    OrganizeDepartmentComponent,
    TrainingPlanComponent,
    TrainingLogComponent,
    AwardPunishModalComponent,
    StaffAddModalComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PengesoftNgLibModule.forRoot(),
    NzMessageModule,
    NzModalModule,
    NzLayoutModule,
    NzAvatarModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzMenuModule,
    NzInputModule,
    NzGridModule,
    NzDropDownModule,
    NzDrawerModule,
    NzFormModule,
    CommonModule,
    FormsModule,
    NzSwitchModule,
    NzTabsModule,
    NzTimelineModule ,
    NzSelectModule,
    NgxEchartsModule,
    NzBreadCrumbModule,
    NzRadioModule,
    NzDatePickerModule,
    NzUploadModule,
    NzInputNumberModule,
    ReactiveFormsModule,
    NzStatisticModule,
    NzCardModule,
    NzPopoverModule,
    NzCalendarModule,
    NzListModule,
    NzCascaderModule,
  ],
  schemas: [
     CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

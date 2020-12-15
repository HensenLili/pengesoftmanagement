import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  PyContainerComponent,
  PyDepartmentManagementComponent,
  PyLoggedInGuard,
  PyLoginComponent,
  PyLoginGuard
} from 'pengesoft-ng-lib';
import {ContainerComponent} from "./views/container/container.component";
import {OrganizeManageComponent} from "./views/organize-manage/organize-manage.component";
import {MyHomeComponent} from "./views/my-home/my-home.component";
import {RecruitManageComponent} from "./views/recruit-manage/recruit-manage.component";
import {TrainingManageComponent} from "./views/training-manage/training-manage.component";
import {StaffManageComponent} from "./views/staff-manage/staff-manage.component";
import {AwardpunishManageComponent} from "./views/awardpunish-manage/awardpunish-manage.component";
import {StaffRosterComponent} from "./components/staff-roster/staff-roster.component";
import {StaffContractComponent} from "./components/staff-contract/staff-contract.component";
import {RecruitManagementComponent} from "./components/recruit-management/recruit-management.component";
import {RecruitTalentPoolComponent} from "./components/recruit-talent-pool/recruit-talent-pool.component";
import {RecruitInterviewComponent} from "./components/recruit-interview/recruit-interview.component";
import {RecruitOfferComponent} from "./components/recruit-offer/recruit-offer.component";
import {RecruitNeedsTableComponent} from "./components/recruit-needs-table/recruit-needs-table.component";
import {RecruitApprovalComponent} from "./components/recruit-approval/recruit-approval.component";
import {RecruitNeedslistComponent} from "./components/recruit-needslist/recruit-needslist.component";
import { StaffEmployeeComponent } from './components/staff-employee/staff-employee.component';
import { StaffContractRenewComponent } from './components/staff-contract-renew/staff-contract-renew.component';
import { StaffEntryComponent } from './components/staff-entry/staff-entry.component';
import { StaffMoveComponent } from './components/staff-move/staff-move.component';
import { StaffFormalComponent } from './components/staff-formal/staff-formal.component';
import { StaffLeaveComponent } from './components/staff-leave/staff-leave.component';
import { StaffMoveHistoryComponent } from './components/staff-move-history/staff-move-history.component';

const routes: Routes = [
  {
    path: 'login',
    component: PyLoginComponent,
    canActivate: [PyLoggedInGuard]
  }, {
    path: '',
    component: ContainerComponent,
    canActivate: [PyLoginGuard],
    children:[
      {
        path: 'home',
        component: MyHomeComponent
      },
      {
        path:'organization',
        component:OrganizeManageComponent
      },
      {
        path: 'recruit',
        component: RecruitManageComponent,
        children:[
          {
            path: 'recruitManagement',
            component: RecruitManagementComponent
          },
          {
            path: 'talentPool',component: RecruitTalentPoolComponent
          },
          {
            path:'addResume', component:RecruitNeedslistComponent
          },
          {
            path: 'recruitInterview',component: RecruitInterviewComponent
          },
          {
            path: 'recruitOffer',component: RecruitOfferComponent
          },
          {
            path: 'recruitNeeds',component: RecruitNeedsTableComponent
          },
          {
            path: 'recruitApproval',component: RecruitApprovalComponent
          },
        ],
      },
      {
        path: 'training',
        component: TrainingManageComponent
      },
      {
        path: 'staff',
        component: StaffManageComponent,
        children:[
          {path:'staffroster', component :StaffRosterComponent},
          { path:'employee', component:StaffEmployeeComponent} ,
          {path:'staffcontract',component:StaffContractComponent},
          {path:'staffcontractrenew',component:StaffContractRenewComponent},
          {path:'staffentry',component:StaffEntryComponent},
          {path:'staffmove',component:StaffMoveComponent},
          {path:'staffformal',component:StaffFormalComponent},
          {path:'staffleave',component:StaffLeaveComponent},
          {path:'staffmovehistory',component:StaffMoveHistoryComponent}
        ]

      },
      {
        path: 'awardpunish',
        component: AwardpunishManageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

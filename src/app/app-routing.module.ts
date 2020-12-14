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
import {RecruitDemandComponent} from "./components/recruit-demand/recruit-demand.component";

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
            path: 'recruitdemand',
            component: RecruitDemandComponent
          }
        ]
      },
      {
        path: 'training',
        component: TrainingManageComponent
      },
      {
        path: 'staff',
        component: StaffManageComponent,
        children:[
          {path:'staffroster', component:StaffRosterComponent},
          {path:'staffcontract',component:StaffContractComponent}
        ]
      },{
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

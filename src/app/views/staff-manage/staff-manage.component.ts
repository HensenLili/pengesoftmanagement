import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-manage',
  templateUrl: './staff-manage.component.html',
  styleUrls: ['./staff-manage.component.less']
})
export class StaffManageComponent implements OnInit {
  theme = true;
  constructor() { }

  ngOnInit(): void {
  }

}

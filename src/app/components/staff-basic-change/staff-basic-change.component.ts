import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff-basic-change',
  templateUrl: './staff-basic-change.component.html',
  styleUrls: ['./staff-basic-change.component.less']
})
export class StaffBasicChangeComponent implements OnInit {
  public mes:object
  constructor() { }
  @Input() messhow:object
  ngOnInit(): void {
  this.mes = this.messhow

  }

  Cancel() {

  }
}

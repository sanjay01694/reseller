import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom';
@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss']
})
export class ManageScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.timePicker();
    js.showHours();
    js.dateRangePicker();
  }

}

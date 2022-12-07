import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom';
@Component({
  selector: 'app-open-hours',
  templateUrl: './open-hours.component.html',
  styleUrls: ['./open-hours.component.scss']
})
export class OpenHoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.timePicker();
    js.showHours();
    js.dateRangePicker();
    // js.showDifferentHours();
  }

}

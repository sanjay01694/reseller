import { Component, OnInit } from '@angular/core';
import * as js from '../../../assets/js/custom';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.dateRangePicker();
    js.specificServices();
  }

}

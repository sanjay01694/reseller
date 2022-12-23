import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom';
@Component({
  selector: 'app-handover-options',
  templateUrl: './handover-options.component.html',
  styleUrls: ['./handover-options.component.scss']
})
export class HandoverOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.switchToggle();
  }

}

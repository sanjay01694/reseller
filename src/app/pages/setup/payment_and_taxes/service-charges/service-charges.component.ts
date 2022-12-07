import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom';
@Component({
  selector: 'app-service-charges',
  templateUrl: './service-charges.component.html',
  styleUrls: ['./service-charges.component.scss']
})
export class ServiceChargesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.ktBootstrapSelect();
  }

}

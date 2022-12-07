import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom';
@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.ktBootstrapSelect();
  }

}

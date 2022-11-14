import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom'
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.dropZone();
  }

}

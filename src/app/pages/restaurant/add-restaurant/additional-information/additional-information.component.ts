import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom'
@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.dropZone();
  }

}

import { Component, OnInit } from '@angular/core';
import * as js from '../../../../../assets/js/custom';
@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.scss']
})
export class MenuSetupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.FileUpload();
  }

}

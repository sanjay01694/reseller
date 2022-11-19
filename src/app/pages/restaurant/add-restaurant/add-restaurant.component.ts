import { Component, OnInit } from '@angular/core';
import * as js from '../../../../assets/js/custom'
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    js.wizard();
    js.dropZone();
  }

}

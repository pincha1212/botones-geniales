import { Component } from '@angular/core';
import { B1Component } from "./b1/b1.component";
import { B2Component } from "./b2/b2.component";
import { B3Component } from "./b3/b3.component";
import { B4Component } from "./b4/b4.component";
import { B5Component } from "./b5/b5.component";
import { B6Component } from "./b6/b6.component";
import { B7Component } from "./b7/b7.component";
import { B8Component } from "./b8/b8.component";
import { B9Component } from "./b9/b9.component";
import { B10Component } from "./b10/b10.component";

@Component({
  selector: 'app-button',
  imports: [B1Component, B2Component, B3Component, B4Component, B5Component, B6Component, B7Component, B8Component, B9Component, B10Component],

  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../models/button.model';

@Component({
  selector: 'app-button',
  imports: [CommonModule],

  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttons: Button[] = [];

  constructor() {}

  ngOnInit() {
    fetch('/buttons-config.json')
      .then(response => response.json())
      .then(config => {
        this.buttons = config.buttons;
        console.log(this.buttons);
      })
      .catch(error => console.error('Error al cargar los botones:', error));
  }
  
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FileValidator} from './file-input.validator'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  frm = new FormGroup({});
  
  constructor() {
    this.buildForm();
  }
  
  private buildForm() {
      this.frm = new FormGroup({
          file: new FormControl("", [FileValidator.validate])
      });
  }
}      

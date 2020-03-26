import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newItem = new Diary(0 , "" , "" ,new Date ())

  constructor() { }

  ngOnInit(): void {
  }

}

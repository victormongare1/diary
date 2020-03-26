import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  newItem = new Diary(0 , "" , "" ,new Date ())
  @Output () addItem= new EventEmitter <Diary>();

  submitItem(){
    this.addItem.emit(this.newItem)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

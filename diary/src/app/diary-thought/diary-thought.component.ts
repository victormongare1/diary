import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-thought',
  templateUrl: './diary-thought.component.html',
  styleUrls: ['./diary-thought.component.css']
})
export class DiaryThoughtComponent implements OnInit {

  @Input() item: Diary;
  @Output() toDelete= new EventEmitter <boolean>();

  itemDelete ( remove :boolean ) {
    this.toDelete.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

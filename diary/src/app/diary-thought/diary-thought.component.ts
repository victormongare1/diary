import { Component, OnInit , Input} from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-thought',
  templateUrl: './diary-thought.component.html',
  styleUrls: ['./diary-thought.component.css']
})
export class DiaryThoughtComponent implements OnInit {
  
  @Input() item : Diary;

  constructor() { }

  ngOnInit(): void {
  }

}

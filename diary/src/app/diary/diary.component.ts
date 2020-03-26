import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  items : Diary[]=[
  new Diary(1,"I fell down" ," I felt so embarrassed"), 
  new Diary(2 ,"I passed exams",' I felt sense of achievement'),
  new Diary(3 ,'I visited friends  ' ,' I was feeling joyful'),
  new Diary(4 ,'I stayed at home all day','nothing new day was nonchalant'),
  new Diary(5 ,'I have a lot of assignment','I was so exhausted and feeling bored')
  ];
  toggleThoughts(index){
    this.items[index].showThought= !this.items[index].showThought;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  newItem = new Diary(0 , "" , "" ,new Date ())
  items : Diary[]=[
  new Diary(1,"I fell down" ," I felt so embarrassed" ,new Date(2020,4,1)), 
  new Diary(2 ,"I passed exams",' I felt sense of achievement',new Date(2020,4,2)),
  new Diary(3 ,'I visited friends  ' ,' I was feeling joyful' ,new Date(2020,4,3)),
  new Diary(4 ,'I stayed at home all day','nothing new day was nonchalant',new Date(2020,4,4)),
  new Diary(5 ,'I have a lot of assignment','I was so exhausted and feeling bored' ,new Date(2020,4,5))
  ];
  toggleThoughts(index){
    this.items[index].showThought= !this.items[index].showThought;
  }
  removeItem(toDelete , index){
    if (toDelete){
      let sureDelete= confirm(`are you sure you want to delete this item ?`)

      if(sureDelete){
        this.items.splice(index,1)
      }
    }
  }
  addNewItem(item){
    let itemLength = this.items.length;
    item.id = itemLength+1;
    item.diaryDate = new Date(item.diaryDate)
    this.items.push(item)
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}

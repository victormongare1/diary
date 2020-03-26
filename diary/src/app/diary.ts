export class Diary {
 showThought : boolean;
 constructor (public id : number, public name : string, public thought : string, public diaryDate :Date){
   this.showThought = false;
 }
}

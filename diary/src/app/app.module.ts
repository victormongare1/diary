import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryThoughtComponent } from './diary-thought/diary-thought.component';
import { HighlightDirective } from './highlight.directive';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryThoughtComponent,
    HighlightDirective,
    DiaryFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

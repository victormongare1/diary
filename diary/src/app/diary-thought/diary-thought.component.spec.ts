import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryThoughtComponent } from './diary-thought.component';

describe('DiaryThoughtComponent', () => {
  let component: DiaryThoughtComponent;
  let fixture: ComponentFixture<DiaryThoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryThoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

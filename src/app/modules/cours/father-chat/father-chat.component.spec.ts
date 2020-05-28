import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherChatComponent } from './father-chat.component';

describe('FatherChatComponent', () => {
  let component: FatherChatComponent;
  let fixture: ComponentFixture<FatherChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

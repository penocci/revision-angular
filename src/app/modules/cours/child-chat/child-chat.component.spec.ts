import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChatComponent } from './child-chat.component';

describe('ChildChatComponent', () => {
  let component: ChildChatComponent;
  let fixture: ComponentFixture<ChildChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

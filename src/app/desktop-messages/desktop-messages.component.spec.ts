import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMessagesComponent } from './desktop-messages.component';

describe('DesktopMessagesComponent', () => {
  let component: DesktopMessagesComponent;
  let fixture: ComponentFixture<DesktopMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

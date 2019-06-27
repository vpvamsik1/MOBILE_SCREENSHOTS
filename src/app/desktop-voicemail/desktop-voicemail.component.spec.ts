import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopVoicemailComponent } from './desktop-voicemail.component';

describe('DesktopVoicemailComponent', () => {
  let component: DesktopVoicemailComponent;
  let fixture: ComponentFixture<DesktopVoicemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopVoicemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopVoicemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbar5Component } from './bottom-navbar5.component';

describe('BottomNavbar5Component', () => {
  let component: BottomNavbar5Component;
  let fixture: ComponentFixture<BottomNavbar5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavbar5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbar5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbar4Component } from './bottom-navbar4.component';

describe('BottomNavbar4Component', () => {
  let component: BottomNavbar4Component;
  let fixture: ComponentFixture<BottomNavbar4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavbar4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

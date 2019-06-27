import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbar3Component } from './bottom-navbar3.component';

describe('BottomNavbar3Component', () => {
  let component: BottomNavbar3Component;
  let fixture: ComponentFixture<BottomNavbar3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavbar3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

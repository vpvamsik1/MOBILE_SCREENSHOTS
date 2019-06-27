import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbar2Component } from './bottom-navbar2.component';

describe('BottomNavbar2Component', () => {
  let component: BottomNavbar2Component;
  let fixture: ComponentFixture<BottomNavbar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavbar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

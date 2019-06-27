import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMessageComponent } from './individual-message.component';

describe('IndividualMessageComponent', () => {
  let component: IndividualMessageComponent;
  let fixture: ComponentFixture<IndividualMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

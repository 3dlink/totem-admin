import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTotemsComponent } from './add-totems.component';

describe('AddTotemsComponent', () => {
  let component: AddTotemsComponent;
  let fixture: ComponentFixture<AddTotemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTotemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTotemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

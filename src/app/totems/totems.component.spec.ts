import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotemsComponent } from './totems.component';

describe('TotemsComponent', () => {
  let component: TotemsComponent;
  let fixture: ComponentFixture<TotemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

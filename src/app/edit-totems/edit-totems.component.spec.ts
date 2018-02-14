import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTotemsComponent } from './edit-totems.component';

describe('EditTotemsComponent', () => {
  let component: EditTotemsComponent;
  let fixture: ComponentFixture<EditTotemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTotemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTotemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

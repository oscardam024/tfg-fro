import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofeComponent } from './addprofe.component';

describe('AddprofeComponent', () => {
  let component: AddprofeComponent;
  let fixture: ComponentFixture<AddprofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

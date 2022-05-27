import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModprofeComponent } from './modprofe.component';

describe('ModprofeComponent', () => {
  let component: ModprofeComponent;
  let fixture: ComponentFixture<ModprofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModprofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

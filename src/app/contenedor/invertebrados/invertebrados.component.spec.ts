import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertebradosComponent } from './invertebrados.component';

describe('InvertebradosComponent', () => {
  let component: InvertebradosComponent;
  let fixture: ComponentFixture<InvertebradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertebradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertebradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

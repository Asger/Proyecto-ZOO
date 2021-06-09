import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesExtincionComponent } from './animales-extincion.component';

describe('AnimalesExtincionComponent', () => {
  let component: AnimalesExtincionComponent;
  let fixture: ComponentFixture<AnimalesExtincionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesExtincionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesExtincionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

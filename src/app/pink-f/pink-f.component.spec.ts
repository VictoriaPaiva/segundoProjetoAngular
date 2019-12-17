import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkFComponent } from './pink-f.component';

describe('PinkFComponent', () => {
  let component: PinkFComponent;
  let fixture: ComponentFixture<PinkFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

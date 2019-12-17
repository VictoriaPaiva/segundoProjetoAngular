import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcDcComponent } from './ac-dc.component';

describe('AcDcComponent', () => {
  let component: AcDcComponent;
  let fixture: ComponentFixture<AcDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

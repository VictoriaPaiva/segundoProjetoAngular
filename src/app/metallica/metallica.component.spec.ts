import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallicaComponent } from './metallica.component';

describe('MetallicaComponent', () => {
  let component: MetallicaComponent;
  let fixture: ComponentFixture<MetallicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

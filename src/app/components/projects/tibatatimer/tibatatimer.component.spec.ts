import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibatatimerComponent } from './tibatatimer.component';

describe('TibatatimerComponent', () => {
  let component: TibatatimerComponent;
  let fixture: ComponentFixture<TibatatimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TibatatimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TibatatimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreComponentComponent } from './tyre-component.component';

describe('TyreComponentComponent', () => {
  let component: TyreComponentComponent;
  let fixture: ComponentFixture<TyreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyreComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

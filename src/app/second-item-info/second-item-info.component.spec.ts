import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondItemInfoComponent } from './second-item-info.component';

describe('SecondItemInfoComponent', () => {
  let component: SecondItemInfoComponent;
  let fixture: ComponentFixture<SecondItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

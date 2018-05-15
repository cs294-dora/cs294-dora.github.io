import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHeaderComponent } from './input-header.component';

describe('InputHeaderComponent', () => {
  let component: InputHeaderComponent;
  let fixture: ComponentFixture<InputHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

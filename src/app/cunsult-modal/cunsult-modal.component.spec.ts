import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CunsultModalComponent } from './cunsult-modal.component';

describe('CunsultModalComponent', () => {
  let component: CunsultModalComponent;
  let fixture: ComponentFixture<CunsultModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CunsultModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CunsultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

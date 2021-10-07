import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseoperationsComponent } from './caseoperations.component';

describe('CaseoperationsComponent', () => {
  let component: CaseoperationsComponent;
  let fixture: ComponentFixture<CaseoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseoperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

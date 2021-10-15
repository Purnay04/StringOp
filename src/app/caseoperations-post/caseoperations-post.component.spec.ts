import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseoperationsPostComponent } from './caseoperations-post.component';

describe('CaseoperationsPostComponent', () => {
  let component: CaseoperationsPostComponent;
  let fixture: ComponentFixture<CaseoperationsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseoperationsPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseoperationsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

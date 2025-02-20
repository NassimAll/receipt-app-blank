import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalReceiptPage } from './personal-receipt.page';

describe('PersonalReceiptPage', () => {
  let component: PersonalReceiptPage;
  let fixture: ComponentFixture<PersonalReceiptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadReceiptPage } from './upload-receipt.page';

describe('UploadReceiptPage', () => {
  let component: UploadReceiptPage;
  let fixture: ComponentFixture<UploadReceiptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

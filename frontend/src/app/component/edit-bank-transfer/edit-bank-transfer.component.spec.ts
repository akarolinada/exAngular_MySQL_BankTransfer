import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankTransferComponent } from './edit-bank-transfer.component';

describe('EditBankTransferComponent', () => {
  let component: EditBankTransferComponent;
  let fixture: ComponentFixture<EditBankTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

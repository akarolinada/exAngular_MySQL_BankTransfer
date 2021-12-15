import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBankTransferComponent } from './new-bank-transfer.component';

describe('NewBankTransferComponent', () => {
  let component: NewBankTransferComponent;
  let fixture: ComponentFixture<NewBankTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBankTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import {
  BankTransferService,
  BankTransfer,
} from 'src/app/services/bank-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bank-transfer',
  templateUrl: './new-bank-transfer.component.html',
  styleUrls: ['./new-bank-transfer.component.css'],
})
export class NewBankTransferComponent implements OnInit {
  bankTransfer: BankTransfer = {
    id_transferencia: '',
    contaCliente: '',
    nomeCliente: '',
    valor: '',
  };

  constructor(
    private BankTrasferService: BankTransferService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  add(){
    delete this.bankTransfer.id_transferencia;

    this.BankTrasferService.newBankTransfer(this.bankTransfer).subscribe();

    this.router.navigate(['/bank_statement']);
  }
}

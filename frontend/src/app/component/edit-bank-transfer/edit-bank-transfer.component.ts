import { ActivatedRoute, Router } from '@angular/router';
import { BankTransferService, BankTransfer } from './../../services/bank-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bank-transfer',
  templateUrl: './edit-bank-transfer.component.html',
  styleUrls: ['./edit-bank-transfer.component.css']
})
export class EditBankTransferComponent implements OnInit {

  bankTransfer: BankTransfer = {
    id_transferencia: '',
    contaCliente:'',
    nomeCliente: '',
    valor:''
  }

  constructor(private bankTransferService:BankTransferService, private router:Router, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_enter = <any>this.activedRoute.snapshot.params['id']
    console.log('id enter: ' + id_enter)
    this.bankTransferService.getSingleTransfer(id_enter).subscribe({
      next: (res) => {console.log(res)
                      this.bankTransfer=<any>res},
      error:(erro) => console.error(erro),
      complete:()=> console.info('complete!')
    })
  }

  editBankTransfer(){
    this.bankTransferService.editTransfer(this.bankTransfer.id_transferencia, this.bankTransfer).subscribe({
      next: (res) => console.log('Bank transfer edited successfuly!'),
      error: (erro) => console.error(erro),
      complete: () => console.info('complete!')
    })
    this.router.navigate(['/bank_statement'])
  }
}

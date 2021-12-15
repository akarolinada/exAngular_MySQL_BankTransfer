import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BankTransferService, BankTransfer } from 'src/app/services/bank-transfer.service';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.css']
})
export class BankStatementComponent implements OnInit {

  ListTransfers: BankTransfer[]

  constructor(private BankTransferService: BankTransferService, private router:Router) {
    this.ListTransfers = []
   }

  ngOnInit(): void {
    this.listTransfers()
  }

  listTransfers(){
    this.BankTransferService.getStatement().subscribe({
      next:(res) => {console.log(res)
                     this.ListTransfers = <any>res},
      error: (error) => console.log(error),
      complete: () => console.log('Complete!')
    })
  }

  delete(id:any){
    this.BankTransferService.deleteTransfer(id).subscribe({
      next: (res) => {console.log('transfer successfuly deleted1')
                      this.listTransfers()},
      error: (error) => console.log(error),
      complete: () => console.log('complete!')
    })
  }

  edit(id:any){
    this.router.navigate(['/edit_bank_transfer/' + id])
  }
}

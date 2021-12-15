import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class BankTransferService {

  url = 'http://localhost:4000/bank_statement';

  constructor(private http: HttpClient) {}

  getStatement() {
    return this.http.get(this.url);
  }

  getSingleTransfer(id:any) {
    return this.http.get(this.url + '/' + id)
  }

  newBankTransfer(bankTransfer:BankTransfer){
    return this.http.post(this.url, bankTransfer)           
  }

  deleteTransfer(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  editTransfer(id:any, bankTransfer:BankTransfer){
    return this.http.put(this.url + '/' + id, bankTransfer)
  }
}

export interface BankTransfer{
  id_transferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
}

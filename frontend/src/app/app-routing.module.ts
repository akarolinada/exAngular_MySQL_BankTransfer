import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankStatementComponent } from './component/bank-statement/bank-statement.component';
import { EditBankTransferComponent } from './component/edit-bank-transfer/edit-bank-transfer.component';
import { NewBankTransferComponent } from './component/new-bank-transfer/new-bank-transfer.component';


const routes: Routes = [
  {path: '', redirectTo:'/bank_statement', pathMatch:'full'},
  {path: 'bank_statement', component:BankStatementComponent},
  {path: 'new_bank_transfer', component:NewBankTransferComponent},
  {path: 'edit_bank_transfer/:id', component:EditBankTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

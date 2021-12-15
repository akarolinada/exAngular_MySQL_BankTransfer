import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BankStatementComponent } from './component/bank-statement/bank-statement.component';
import { NewBankTransferComponent } from './component/new-bank-transfer/new-bank-transfer.component';
import { EditBankTransferComponent } from './component/edit-bank-transfer/edit-bank-transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BankStatementComponent,
    NewBankTransferComponent,
    EditBankTransferComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

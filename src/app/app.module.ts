import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    FooterComponent,
    DepositComponent,
    WithdrawComponent,
    TransactionComponent,
    DeleteConfirmComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

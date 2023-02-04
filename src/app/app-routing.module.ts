import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  // login
  {
    path:'',component:LoginComponent
  },
  // dashboard
  {
    path:'dashboard',component:DashboardComponent
  },
  // register
  {
    path:'register',component:RegisterComponent
  },
  // deposit
  {
    path:'deposit',component:DepositComponent
  },
  // withdraw
  {
    path:'withdraw',component:WithdrawComponent
  },
  // transaction
  {
    path:'transaction',component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

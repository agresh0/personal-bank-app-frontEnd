import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  msg=''
  eMsg=''

  // Deposit Form
   depositForm = this.fb.group({
     amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
     acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
     pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
   })
       user=""
 
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("username")){
      this.user=localStorage.getItem("username") || ""
    }

  }
    // register
    deposit(){
      if(this.depositForm.valid){
        let amount = this.depositForm.value.amount
        let acno = this.depositForm.value.acno
        let pswd = this.depositForm.value.pswd
        // // asynchronous
        this.api.deposit(acno,pswd,amount).subscribe(
          // response 200
          (result:any)=>{
          console.log(result);
            alert(result.message);
            // auto refresh
            this.depositForm.reset()
        },
        // response 4xx
        (result:any)=>{
          this.eMsg = result.error.message
        }
        )
      }else(
        alert('Invalid Form')
      )
      
    }
  
  

}

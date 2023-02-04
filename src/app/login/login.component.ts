import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // told error message
  eMsg=''
  msg=''

  // login Form
  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      let acno = this.loginForm.value.acno
      let pswd = this.loginForm.value.pswd
      // asynchronous
      this.api.login(acno,pswd).subscribe(
        // response 200
        (result:any)=>{
        console.log(result);
        // store username permenently on localstorage
        localStorage.setItem("username",result.username)
        localStorage.setItem("token",result.token)
        localStorage.setItem("currentAcno",result.currentAcno)

        this.msg=result.message 
        setTimeout(()=>{
          this.router.navigateByUrl('dashboard')
        },2000)
      },
      // response 4xx
      (result:any)=>{
        this.eMsg = result.error.message
        // alert(result.error.message)
      }
      )
    }else(
      alert('Invalid Form')
    )
    
  }

}

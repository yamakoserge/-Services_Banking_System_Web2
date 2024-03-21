import { Router } from 'express';
import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validateForm!: FormGroup

  constructor(private fb: FormBuilder,
    private AuthService: AuthService,
    private notification: NzNotificationService,
    private Router: Router,
    ){}
    ngOnInit(){
      this.validateForm = this.fb.group({
        userName : [null, [Validators.required]],
        password: [null, [Validators.required]],
      })
    }

    submitForm(){
      this.AuthService.login(this.validateForm.get(['username'])!.value, this.validateForm.get(['password'])!.value).subscribe(res=>{
        console.log(res)
      },error=>{
        this.notification.error(
          'ERROR',
          'Bad creandentials',
          {nzDuration:5000}
        )
      })
    }
}

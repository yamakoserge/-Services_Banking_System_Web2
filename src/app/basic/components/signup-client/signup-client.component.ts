import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from 'express';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.scss'
})
export class SignupClientComponent {



  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private notification: NzNotificationService,
              private router: Router) {}

  ngOnInit(){
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name : [null, [Validators.required]],
      lastname : [null, [Validators.required]],
      phone : [null],
      password : [null, [Validators.required]],
      CheckPassword : [null, [Validators.required]],
  })
 }

 submitForm(){
  this.authService.registerClient(this.validateForm.value).subscribe( (res: any) => {
    this.notification
      .success(
        'SUCCESS',
        'Signup successful',
        {nzDuration: 5000 }
      );

  },(error: any)=>{
    this.notification
    .error(
      'ERROR',
      '${error,error}',
      { nzDuration: 5000 }
    )
  });
}

}


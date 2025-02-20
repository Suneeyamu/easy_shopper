import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.spinner.show();
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toastr.error('Error!', 'Please enter valid email and password :(');

      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService.getUserDetails(email, password).subscribe({
      next: (user) => {
        if (user) {
          const getUserDetails = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            mobileNo: user.mobileNo,
            isActive: user.isActive,
            isMailActive: user.isMailActive,
            id: user.id,
          };
          this.authService.setUser(getUserDetails);
          this.toastr.success(
            'Successfully logged :)',
            `the user is ${user.firstName} ${user.lastName}`
          );
          this.loginForm.reset();
          this.spinner.hide();
          this.router.navigate(['dashboard']);
        } else {
          this.toastr.error('Error :)', 'Invalid email and password :(');
        }
      },
      error: (err) => {
        console.log('Login Error: ', err);
      },
    });
  }
}

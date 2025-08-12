import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-comp',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
})
export class AuthComponent {
  username?: string; // 'admin'
  password?: string; // 'secret'
  errorMessage?: string | null;

  constructor(private router: Router) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      if (
        this.username === 'admin' &&
        this.password === 'secret'
      ) {
        this.errorMessage = null;
        this.router.navigateByUrl('/admin/main'); // or wherever you want to go
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    } else {
      this.errorMessage =
        'Please fill out the form correctly';
    }
  }
}

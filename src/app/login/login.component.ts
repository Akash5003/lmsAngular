import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formdata = {
    userId: '',
    password: ''
  };

  constructor(private router: Router) { }

  submit() {
    
    if (this.formdata.userId === '1' && this.formdata.password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/user-options']);
    }
  }

  resetForm() {
    this.formdata.userId = '';
    this.formdata.password = '';
  }
}

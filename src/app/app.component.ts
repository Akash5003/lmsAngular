import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formdata = {
    userId: '',
    password: '',
    confirmPassword: ''
  };
  isloggedin =false;

  submit() {
   
    console.log(this.formdata);
  }

  resetForm() {
    this.formdata = {
      userId: '',
      password: '',
      confirmPassword: ''
    };
  }
}

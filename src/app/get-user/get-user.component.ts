import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get('') 
      .subscribe(response => {
        this.user = response;
      });
  }
}

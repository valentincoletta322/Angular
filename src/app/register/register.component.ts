import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  readonly ROOT_URL = "http://localhost:5100"

  username!: string;
  email!: string;
  password!: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string){
    this.router.navigate([page]);
  }

  crearUsuario(){

    const data: Usuario = {
      username: this.username,
      email: this.email,
      password: this.password
    }

    let headers = new HttpHeaders({
      'Content-type':"application/json"
    });

    this.http.post(this.ROOT_URL+"/signup", data, {headers}).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/menu"]);
      },
      error => {
        console.log(error);
      }
    )
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  readonly ROOT_URL = "http://localhost:5100"

  email!: string;
  password!: string;
  statusLogin!: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  iniciarSesion(){

    const data: Usuario = {
      username: "",
      email: this.email,
      password: this.password
    }

    let headers = new HttpHeaders({
      'Content-type':"application/json"
    });

    this.http.post(this.ROOT_URL+"/signin", data, {headers}).subscribe(
      (response:any) => {
        console.log(response);
        const token = response.headers.get('Authorization');
        localStorage.setItem("token", token)
        this.router.navigate(["/menu"]);
      },
      error => {
        console.log(error);
        this.statusLogin="Error al iniciar sesion"
      }
    )
  }
}

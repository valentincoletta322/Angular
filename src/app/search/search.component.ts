import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  readonly ROOT_URL = "http://localhost:5100"

  resBuscarCasas!: String;

  constructor(private router: Router, private http: HttpClient) {
    this.resBuscarCasas="";
  }

  buscarCasas(){
    let headers = new HttpHeaders({
      'Content-type':"application/json"
    });

    this.http.get(this.ROOT_URL+"/casas", {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarCasas=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarCasas="Hubo un error al buscar"
      }
    )
  }

  buscarUnaCasa(){
    let headers = new HttpHeaders({
      'Content-type':"application/json"
    });

    this.http.get(this.ROOT_URL+"/casas/{direccion}/", {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarCasas=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarCasas="Hubo un error al buscar"
      }
    )
  }

}

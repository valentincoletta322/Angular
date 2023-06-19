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
  resBuscarUnaCasa!: String;
  resBuscarConsumo!: String;

  direccionCasa!: String;
  direccionConsumo!: String;

  resBuscarObjetos!: String;
  resBuscarUnObjeto!: String;

  idBusquedaObjeto!: String;

  constructor(private router: Router, private http: HttpClient) {
    this.resBuscarCasas="";
    this.resBuscarUnaCasa="";
    this.resBuscarObjetos="";
    this.resBuscarUnObjeto="";
  }

  buscarCasas(){
    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

    this.http.get(this.ROOT_URL+"/casas", {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarCasas=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarCasas="Hubo un error al buscar las casas"
      }
    )
  }

  buscarUnaCasa(){
    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

   this.http.get(this.ROOT_URL+"/casas/"+this.direccionCasa, {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarUnaCasa=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarUnaCasa="Hubo un error al buscar la casa"
      }
    )
  }

  buscarConsumo(){
    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

   this.http.get(this.ROOT_URL+"/casas/"+this.direccionConsumo+"/mostrarConsumo", {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarConsumo=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarConsumo="Hubo un error al buscar el consumo"
      }
    )
  }

  buscarObjetos(){
    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

   this.http.get(this.ROOT_URL+"/objetos", {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarObjetos=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarObjetos="Hubo un error al buscar los objetos"
      }
    )
  }

  buscarUnObjeto(){
    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

   this.http.get(this.ROOT_URL+"/objetos/"+this.idBusquedaObjeto, {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarUnObjeto=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarUnObjeto="Hubo un error al buscar los objetos"
      }
    )
  }

}

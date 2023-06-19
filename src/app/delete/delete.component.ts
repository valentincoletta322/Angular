import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  readonly ROOT_URL = "http://localhost:5100"

  resBuscarCasa!: String;

  direccionCasa!: String;

  resBuscarUnObjeto!: String;

  idBusquedaObjeto!: String;

  constructor(private router: Router, private http: HttpClient) {
    this.resBuscarCasa="";
    this.resBuscarUnObjeto="";
  }

  borrarCasa(){
    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

    this.http.delete(this.ROOT_URL+"/casas/"+this.direccionCasa, {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarCasa=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarCasa="Hubo un error al borrar la casa."
      }
    )
  }

  borrarObjeto(){
    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

    this.http.delete(this.ROOT_URL+"/objetos/"+this.idBusquedaObjeto, {headers}).subscribe(
      response => {
        console.log(response);
        this.resBuscarUnObjeto=JSON.stringify(response);
      },
      error => {
        console.log(error);
        this.resBuscarUnObjeto="Hubo un error al borrar el objeto."
      }
    )
  }
}

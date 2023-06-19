import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Casa } from '../Casa';
import { Objeto } from '../Objeto';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  readonly ROOT_URL = "http://localhost:5100"

  resAgregarObjeto!: string;
  resAgregarCasa!: string;

  objetos!: string;
  nombre!: string;

  consumo!: number;
  consumo_diario!: number;

  direccion!: number;
  id!: number;

  constructor(private router: Router, private http: HttpClient) {
  }
  objetosLista: Objeto[] = [];
  nombreAux!: string;
  consumoAux!: number;
  idAux!: number;

  agregarObjetos(){
    const data: Objeto = {
      nombre: this.nombreAux,
      id: this.idAux,
      consumo:this.consumoAux

    }
    this.objetosLista.push(data)
  }

  agregarCasa(){

    const data: any = {
      direccion: this.direccion,
      consumo_diario: this.consumo_diario,
      objetos: this.objetosLista
    }
  
    console.log(this.objetosLista);
    console.log(data)

    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

    this.http.post(this.ROOT_URL+"/casas", data, {headers}).subscribe(
      response => {
        console.log(response);
        this.resAgregarCasa="Se agregó la casa."
      },
      error => {
        console.log(error);
        this.resAgregarCasa="Hubo un error al borrar la casa."
      }
    )
  }


  agregarObjeto(){

    const data: Objeto = {
      nombre: this.nombre,
      consumo: this.consumo,
      id: this.id
    }

    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });
    console.log(data)
    this.http.post(this.ROOT_URL+"/objetos", data, {headers}).subscribe(
      response => {
        console.log(response);
        this.resAgregarObjeto="Se agregó el objeto."
      },
      error => {
        console.log(error);
        this.resAgregarObjeto="Hubo un error al agregar el objeto."
      }
    )
  }
}

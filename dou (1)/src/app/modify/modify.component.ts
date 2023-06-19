import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Casa } from '../Casa';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {
  readonly ROOT_URL = "http://localhost:5100"

  resModificarObjeto!: string;
  resModificarCasa!: string;

  objetos!: string;
  nombre!: string;

  consumo!: number;
  consumo_diario!: number;

  direccion!: number;
  id!: number;

  constructor(private router: Router, private http: HttpClient) {
  }

  agregarCasa(){

    const data: Casa = {
      direccion: this.direccion,
      consumo_diario: this.consumo_diario,
      objetos: this.objetos
    }

    let headers = new HttpHeaders({
      'Content-type':"application/json"
    });

    this.http.post(this.ROOT_URL+"/casas", data, {headers}).subscribe(
      response => {
        console.log(response);
        this.resModificarCasa="Se modificó la casa."
      },
      error => {
        console.log(error);
        this.resModificarCasa="Hubo un error al modificar la casa."
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
      'Content-type':"application/json"
    });
    console.log(data)
    this.http.post(this.ROOT_URL+"/objetos", data, {headers}).subscribe(
      response => {
        console.log(response);
        this.resModificarObjeto="Se modificó el objeto."
      },
      error => {
        console.log(error);
        this.resModificarObjeto="Hubo un error al modificó el objeto."
      }
    )
  }
}

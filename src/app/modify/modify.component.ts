import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Casa } from '../Casa';
import { Objeto } from '../Objeto';

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
  direccionB!: string;
  id!: number;
  idB!: number;

  direccion1!: number;
  direccion2!: number;
  resSumarConsumos!: string;

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

  sumarConsumos(){

    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });

    this.http.patch(this.ROOT_URL+"/casas/sumar_consumos/"+this.direccion1+"/"+this.direccion2, {headers}).subscribe(
      response => {
        console.log(response);
        this.resSumarConsumos=JSON.stringify(response)
      },
      error => {
        console.log(error);
        this.resSumarConsumos="Hubo un error al sumar los consumos."
      }
    )
  }

  modificarCasa(){

    const data: any = {
      direccion: this.direccion,
      consumo_diario: this.consumo_diario,
      objetos: this.objetosLista
    }

    if(this.direccion==undefined){
      delete data.direccion
    }
    if (this.consumo_diario==undefined){
      delete data.consumo_diario
    }

    if (this.objetosLista.length<1){
      delete data.objetos
    }

    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });
    console.log(this.objetosLista);
    console.log(data)
    this.http.patch(this.ROOT_URL+"/casas/"+this.direccion, data, {headers}).subscribe(
      response => {
        console.log(response);
        this.resModificarCasa="Se modificó la casa."
      },
      error => {
        console.log(error);
        this.resModificarCasa="Hubo un error al modificar la casa."
      }
    )
    this.objetosLista = [];
  }

  modificarObjeto(){

    const data: any = {
      nombre: this.nombre,
      consumo: this.consumo,
      id: this.id
    }
    if(this.nombre==undefined){
      delete data.nombre
    }
    if (this.consumo==undefined){
      delete data.consumo
    }

    if(this.id==undefined){
      delete data.id
    }

    let headers = new HttpHeaders({
      'Content-type':"application/json",
      'Authorization': localStorage.getItem("token") || ""
    });
    console.log(data)
    this.http.patch(this.ROOT_URL+"/objetos/"+this.idB, data, {headers}).subscribe(
      response => {
        console.log(response);
        this.resModificarObjeto="Se modificó el objeto."
      },
      error => {
        console.log(error);
        this.resModificarObjeto="Hubo un error al modificar el objeto."
      }
    )
  }
}

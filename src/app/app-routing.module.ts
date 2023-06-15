import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasasComponent } from './casas/casas.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: "Login"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Register"
  },
  {
    path: "menu",
    component: MenuComponent,
    title: "Menu"
  },
  {
    path: "casas",
    component: CasasComponent,
    title: "Casas"
  },
  {
    path:"objetos",
    component: ObjetosComponent,
    title: "Objetos"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

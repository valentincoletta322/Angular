import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasasComponent } from './casas/casas.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ModifyComponent } from './modify/modify.component';
import { DeleteComponent } from './delete/delete.component';
import { UploadComponent } from './upload/upload.component';

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
  },
  {
    path:"search",
    component: SearchComponent,
    title: "search"
  },
  {
    path:"modify",
    component: ModifyComponent,
    title: "modify"
  },
  {
    path:"delete",
    component: DeleteComponent,
    title: "delete"
  },
  {
    path:"upload",
    component: UploadComponent,
    title: "upload"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

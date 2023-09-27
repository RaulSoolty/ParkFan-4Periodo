import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Rota para a página de login
  { path: 'cadastro', component: CadastroComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecionar para a página de login por padrão
  // Outras rotas, se houver
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

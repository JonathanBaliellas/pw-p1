import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cadastrar(): void{
    (document.getElementById('divCadastro') as HTMLElement).style.display = 'none';
    window.alert('Cadastro realizado');

  }

  recuperar(): void{
    (document.getElementById('divEsqueciSenha') as HTMLElement).style.display = 'none';
    window.alert('Um link para recuperação de senha foi enviado ao seu email');

  }
}

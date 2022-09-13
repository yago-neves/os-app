import { Component } from '@angular/core';
import { AuthService } from './../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  constructor(
    public  auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
    ) { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
    .then(() => {
      if (this.auth.jwtPayload?.nome === "Administrador"){ 
      this.router.navigate(['/ordensdeservico']);
      } else{
        this.router.navigate(['/ordensdeservico/nova']);
      }
    })
    .catch(erro => {
      this.errorHandler.handle(erro);
    });
  }

}

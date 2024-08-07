import { Injectable } from '@angular/core';
import { ILogin, ILoginResponse } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { apiEndpoint } from '../constants/constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  onLogin(data: ILogin){
    console.log("entrou no onLogin()");
    return this.http
      .post<ILoginResponse>(`${apiEndpoint.AuthEndpoint.login}`, data)
      .pipe(
        map((response) => {
          if (response) {
            this.tokenService.setToken(response.token);
          }
          return response;
        })
      );
  }

  onLogout() {
    this.tokenService.removeToken();
  }
}

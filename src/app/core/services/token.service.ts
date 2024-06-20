import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constants } from '../constants/constants';
import { IUser } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {
    const token = this.getToken();
    if (token) {
      this.updateToken(true);
    }
  }

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  setToken(token: string) {
    this.updateToken(true);
    localStorage.setItem(constants.CURRENT_TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(constants.CURRENT_TOKEN);
  }

  removeToken() {
    this.updateToken(false);
    localStorage.removeItem(constants.CURRENT_TOKEN);
  }

  getLoggedUser() : IUser | null{
    let token : string | null = localStorage.getItem(constants.CURRENT_TOKEN);
    if(token){
      let jsonContent = JSON.parse(atob(token.split('.')[1]));
      //return jsonContent as IUser; assim seria o melhor jeito?
      return {firstName: jsonContent.primeiroNome, lastName: jsonContent.sobrenome,
        id: jsonContent.id, login: jsonContent.login, role: jsonContent.cargo
      };

    }
    return null;
  }
}
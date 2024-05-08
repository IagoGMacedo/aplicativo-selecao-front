import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';
import { IUser } from '../models/auth.model';
import { IUserValue } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }

  getAllUserValue(): Observable<IUserValue[]> {
    return this.http.get<IUserValue[]>(`${apiEndpoint.UserEndpoint.userValue}`);
  }
}

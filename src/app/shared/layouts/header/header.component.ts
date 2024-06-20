import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TokenService } from '../../../core/services/token.service';
import { IUser, Role } from '../../../core/models/auth.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private tokenService: TokenService){

  }

  loggedUser : IUser = {firstName: '', id: 0, lastName: '', login: '', role: Role.COMMON};

  ngOnInit(): void {
    const loggedUserService : IUser | null = this.tokenService.getLoggedUser();
    if(loggedUserService){
      this.loggedUser = loggedUserService;
    }
  }

  onLogout() {
    this.authService.onLogout();
  }

}

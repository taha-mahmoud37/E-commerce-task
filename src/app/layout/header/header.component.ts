import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}

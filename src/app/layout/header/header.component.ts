import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) { }

  ngOnInit(): void {

  }



  logout(): void {
    this.authService.logout();

  }
}

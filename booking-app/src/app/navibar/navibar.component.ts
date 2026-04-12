import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navibar',
  imports: [CommonModule, RouterLink, RouterLinkActive,],
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.css'
})
export class NavibarComponent {

  isDarkMode = false;
  isMenuOpen = false;

constructor(private router: Router, private apiService: ApiService, private cdr: ChangeDetectorRef) {}



  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.setTheme();
    this.cdr.detectChanges();
  }

  private setTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark', this.isDarkMode);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get isAuthenticated(): boolean {
    return this.apiService.isAuthenticated();
  }

  get isCustomer(): boolean {
    return this.apiService.isCustomer();
  }

  get isAdmin(): boolean {
    return this.apiService.isAdmin();
  }

  handleLogout(): void {
    const isLogout = window.confirm("Are you sure you want logout?")
    if(isLogout) {
      this.apiService.logout();
      this.router.navigate(['/home'])
    }
  }
}

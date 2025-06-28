import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [
    CommonModule
  ],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css'
})
export class BackToTop {

  showTop = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showTop = window.pageYOffset > 300;
  }

  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

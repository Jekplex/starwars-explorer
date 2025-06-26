import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'starwars-explorer';

  private isReleaseView : boolean = false;
  
  setReleaseView(bool: boolean): void {
    this.isReleaseView = bool;
  }
  
  getReleaseView(): boolean {
    // console.log(this.isReleaseView);
    return this.isReleaseView;
  }

}

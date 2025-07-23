import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exporter',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './exporter.html',
  styleUrl: './exporter.css'
})
export class Exporter {

  @Input() userData: string = "";

  copySuccess = false;
  showUserData: boolean = false;

  exportUserData(): void {
    this.showUserData = true;
  }

  //

  cancelDataExport(): void {
    this.showUserData = false;
  }

  /**
   * Copies the current userData string to the clipboard
   * and flips the copySuccess flag for 2 seconds.
   */
  copyData(): void {
    if (!this.userData) return;

    navigator.clipboard.writeText(this.userData)
      .then(() => {
        this.copySuccess = true;
        // revert the button text after 2s
        setTimeout(() => this.copySuccess = false, 2000);
      })
      .catch(err => {
        console.error('Failed to copy data:', err);
      });
  }
  

}

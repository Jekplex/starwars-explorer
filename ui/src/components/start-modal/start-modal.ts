import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-start-modal',
  imports: [
    CommonModule
  ],
  templateUrl: './start-modal.html',
  styleUrl: './start-modal.css'
})
export class StartModal {

  // control modal visibility
  showImportExportModal = true;
  
  importData(): void {
    // TODO: implement import logic
    console.log('Import action triggered');
  }

}

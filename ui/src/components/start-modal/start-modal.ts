import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ContentData } from '../../../data/content-data';

@Component({
  selector: 'app-start-modal',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './start-modal.html',
  styleUrl: './start-modal.css'
})
export class StartModal {

  // control modal visibility
  showImportExportModal = true;
  showPasteModal = false;

  pasteDataText: string = "";

  openPasteModal(): void {
    console.log("something");
    this.showPasteModal = true;
    this.showImportExportModal = false;
  }

  confirmImport(): void {
    try {
      const imported = JSON.parse(this.pasteDataText);
      const items = Array.isArray(imported) ? imported : [imported];
      // Update the selected property of each ContentData item if IDs match
      ContentData.forEach(contentItem => {
        const match = items.find(item => item.id === contentItem.id);
        if (match && match.selected !== undefined) {
          contentItem.selected = match.selected;
        }
      });
      this.finishPaste();
    } catch (error) {
      console.error('Import failed: invalid JSON', error);
    }
  }

  cancelPaste(): void {
    // clear text
    this.pasteDataText = "";
    // reset modals
    this.showPasteModal = false;
    this.showImportExportModal = true;
  }

  finishPaste(): void {
    this.showPasteModal = false;
  }

}

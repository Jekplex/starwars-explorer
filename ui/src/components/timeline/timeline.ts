import { Component, Input, OnInit } from '@angular/core';
import { ContentItem } from '../../../models/content-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline implements OnInit {

  @Input() dataSet: ContentItem[] = [];
  @Input() isReleaseOrder: Boolean = false;

  ngOnInit() {
    // Initialize each item with a closed state
    this.dataSet.forEach(item => item.open = false);
  }

  openDetails(item: any) {
    // Toggle only the clicked item; allow multiple open
    item.open = !item.open;
  }

}

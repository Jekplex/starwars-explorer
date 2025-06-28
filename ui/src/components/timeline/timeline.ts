import { Component, Input } from '@angular/core';
import { ContentItem } from '../../../models/content-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [
    CommonModule
  ],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {

  @Input() dataSet: ContentItem[] = [];
  @Input() isReleaseOrder: Boolean = false;
  
  openDetails(item: ContentItem) {
    // e.g. navigate to a detail page or open a modal
    console.log('Open details for', item);
    // this.router.navigate(['/details', item.id]); 
  }

}

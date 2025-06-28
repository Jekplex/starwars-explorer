import { Component, Input, SimpleChanges } from '@angular/core';
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
  
}

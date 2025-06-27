import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ContentItem } from "../../models/content-item";
import { ContentData } from "../../data/content-data";
import { Timeline } from '../components/timeline/timeline';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Timeline
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'starwars-explorer';

  ngOnInit() {
    this.loadSortedContentData();
    this.setCurrentDataSet();
  }

  // View Pill Flipper

  private isReleaseView : boolean = false;
  
  setReleaseView(bool: boolean): void {
    this.isReleaseView = bool;
    this.setCurrentDataSet()
  }
  
  getReleaseView(): boolean {
    return this.isReleaseView;
  }

  // Content Data

  private currentDataSet: ContentItem[] = []

  private contentDataChronologicalOrder: ContentItem[] = [];
  private contentDataReleaseOrder: ContentItem[] = [];

  private loadSortedContentData(): void {
    this.contentDataChronologicalOrder = ContentData.slice().sort((a: ContentItem, b: ContentItem) => a.order.chronological - b.order.chronological);
    this.contentDataReleaseOrder = ContentData.slice().sort((a: ContentItem, b: ContentItem) => a.order.release - b.order.release);
  }

  private setCurrentDataSet(): void {
    if (this.isReleaseView) {
      this.currentDataSet = this.contentDataReleaseOrder;
    } else {
      this.currentDataSet = this.contentDataChronologicalOrder;
    }
  }

  getContentDataInChronologicalOrder() {
    console.log(this.contentDataChronologicalOrder);
    return this.contentDataChronologicalOrder;
  }

  getContentDataInReleaseOrder() {
    console.log(this.contentDataReleaseOrder);
    return this.contentDataReleaseOrder;
  }

  getCurrentDataSet() {
    return this.currentDataSet;
  }

  //

}
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentItem } from "../../models/content-item";
import { ContentData } from "../../data/content-data";
import { Timeline } from '../components/timeline/timeline';
import { Footer } from '../components/footer/footer';
import { BackToTop } from '../components/back-to-top/back-to-top';
import { StartModal } from "../components/start-modal/start-modal";
import { Exporter } from "../components/exporter/exporter";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Timeline,
    Footer,
    BackToTop,
    StartModal,
    Exporter
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

  private isReleaseOrder : boolean = false;
  
  setReleaseView(bool: boolean): void {
    this.isReleaseOrder = bool;
    this.setCurrentDataSet()
  }
  
  getReleaseOrder(): boolean {
    return this.isReleaseOrder;
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
    if (this.isReleaseOrder) {
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

  // Export content selection as JSON string
  public exportUserDataAsString(): string {
    return JSON.stringify(
      ContentData.map(({ id, selected }) => ({ id, selected }))
    );
  }

}
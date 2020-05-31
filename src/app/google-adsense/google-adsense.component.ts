import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'google-adsense',
  templateUrl: './google-adsense.component.html',
  styleUrls: ['./google-adsense.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleAdsenseComponent implements AfterViewInit  {

  @Input() data;
  constructor() {}
  ngAfterViewInit() {
  setTimeout(() => {
    try {
        (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
      } catch (e) {
        console.error(e);
      }
    }, 2000);
  }

}

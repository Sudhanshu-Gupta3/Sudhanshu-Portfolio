import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  showself:boolean = true;
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

  toggle(){
    if(this.showself){
      this.showself = false;
      return;
    }
    this.showself = true;
  }
}

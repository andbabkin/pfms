import { Component, OnInit } from '@angular/core';
import { ContentService } from '../core/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page = 'home';
  err: string;
  isContentLoaded = false;

  constructor(public c: ContentService) { }

  ngOnInit(): void {
    if (!this.c.hasPage(this.page)) {
      this.c.load(this.page, (status) => {
        if (status === 200) {
          this.isContentLoaded = true;
        } else {
          this.err = 'Failed to load content of the page';
        }
      });
    } else {
      this.isContentLoaded = true;
    }
  }
}

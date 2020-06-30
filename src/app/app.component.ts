import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  sideMenuOpened: boolean;
  tabletQuery: MediaQueryList;

  private readonly tabletQueryListener: (e: MediaQueryListEvent) => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.tabletQuery = media.matchMedia('(min-width: 768px)');
    const appComponent = this;
    this.tabletQueryListener = (e: MediaQueryListEvent) => {
      appComponent.sideMenuOpened = e.matches;
      changeDetectorRef.detectChanges();
    };

    // Method addEventListener is not supported in some browsers yet
    try {
      this.tabletQuery.addEventListener<'change'>('change', this.tabletQueryListener);
    } catch (ex) {
      this.tabletQuery.addListener(this.tabletQueryListener);
    }
  }

  ngOnInit(): void {
    this.sideMenuOpened = this.tabletQuery.matches;
  }

  ngOnDestroy(): void {
    try {
      this.tabletQuery.removeEventListener<'change'>('change', this.tabletQueryListener);
    } catch (ex) {
      this.tabletQuery.removeListener(this.tabletQueryListener);
    }
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() menuOpened: boolean;
  @Output() menuOpenedChange = new EventEmitter<boolean>();

  onClickMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.menuOpenedChange.emit(this.menuOpened);
  }
}

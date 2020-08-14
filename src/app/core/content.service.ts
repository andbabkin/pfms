import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

interface ContentRequest {
  page: string;
}

interface PageStrings {
  [key: string]: string;
}

interface Content {
  [page: string]: PageStrings;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content: Content = {};

  constructor(private be: BackendService) { }

  load(page: string, callback: (status: number) => void) {
    this.be.post<ContentRequest>('app/content', { page }).subscribe(r => {
      if (r.status === 200) {
        this.content[page] = {...r.data} as PageStrings;
      } else {
        console.error(`(${r.status}) ${r.error}`);
      }
      callback(r.status);
    });
  }

  get(page: string, key: string): string {
    if (this.content.hasOwnProperty(page) && this.content[page][key] !== undefined) {
      return this.content[page][key];
    } else {
      return `(${page}.${key})`;
    }
  }

  hasPage(page: string): boolean {
    return this.content.hasOwnProperty(page);
  }
}

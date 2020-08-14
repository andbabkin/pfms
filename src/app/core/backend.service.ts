import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  /**
   * Sends an authorized POST request to the app server and returns an Observable with server response
   * @param path Segments of URL without leading "/" (e.g. 'auth/login','app/content')
   * @param data Object with request parameters
   */
  post<T>(path: string, data: T) {
    const headers = {
      Authorization: 'Bearer ' + this.authService.getToken()
    };
    return this.httpService.post(path, data, headers);
  }
}

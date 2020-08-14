import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { BaseResponse } from './response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  static handleError(response: HttpErrorResponse) {
    let message: string;
    if (response.error instanceof ErrorEvent) {
      message = response.error.message;
    } else {
      message = response.error.error;
    }

    return of({
      data: null,
      error: message,
      status: response.status
    } as BaseResponse);
  }

  constructor(private client: HttpClient) {}

  /**
   * Sends a POST request to the app server and returns an Observable with server response
   * @param path Segments of URL without leading "/" (e.g. 'auth/login','app/content')
   * @param data Object with request parameters
   * @param headers Object with HTTP headers
   */
  post<T>(path: string, data: T, headers: {[p: string]: string | string[]} = {}) {
    const url = environment.backend + path;
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    const httpHeaders = new HttpHeaders({...defaultHeaders, ...headers});
    return this.client
      .post<BaseResponse>(url, data, {headers: httpHeaders, observe: 'response' as const})
      .pipe(
        map(r => ({ data: r.body, error: null, status: r.status} as BaseResponse)),
        catchError(HttpService.handleError)
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public baseURL = 'http://f495625e7ff4.ngrok.io/api';

  constructor(
    private http: HttpClient,
  ) { }

  doGet(path) {
    return new Promise<any>(resolve => {
      this.http.get(this.baseURL + path)
      .subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(error);
      });
    });
  }

  doPost(path, data) {
    return new Promise<any>(resolve => {
      this.http.post(this.baseURL + path, data)
      .subscribe((data: any) => {
        resolve(data);
      }, error => {
        resolve(error);
      });
    });
  }
}

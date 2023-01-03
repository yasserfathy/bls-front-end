import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Button } from '../model/button';

@Injectable({
  providedIn: 'root'
})
export class ButtonServiceService {
  private baseURL = "http://localhost:9090/api/"

  constructor(private http: HttpClient) {
  }

  saveButton(button: Button): Observable<Button> {
    return this.http.post<Button>(this.baseURL + "buttons", button)
  }
}

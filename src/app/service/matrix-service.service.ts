import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Matrix} from '../model/matrix';

@Injectable({
  providedIn: 'root'
})
export class MatrixServiceService {
  private baseURL = "http://localhost:9090/api/"

  constructor(private http: HttpClient) {
  }

  saveMatrix(matrix: Matrix): Observable<Matrix> {
    return this.http.post<Matrix>(this.baseURL + "matrices", matrix)
  }
}

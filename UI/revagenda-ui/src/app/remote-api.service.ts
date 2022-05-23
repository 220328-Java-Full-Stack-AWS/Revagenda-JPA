import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteApiService {

  //baseUrl: string = "http://localhost:8080/tasks/new";
  baseUrl: string = "Revagendakp-env.eba-mkadq2gc.us-east-1.elasticbeanstalk.com/tasks/new"

  constructor(private http: HttpClient) { }

  postNewTask(uri: string, body: object, options: object): Observable<any> {
    console.log("POST: ", this.baseUrl, body, options)
    return this.http.post<any>(this.baseUrl, JSON.stringify(body),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('anotherheader', 'headervalue') //chain additional headers with further .set() calls
      })
      .pipe(
        retry(3),
        catchError(this.errorHandler)
      )
  }

  test(): Observable<any> {
    console.log("test");
    return this.http.get<object>("Revagendakp-env.eba-mkadq2gc.us-east-1.elasticbeanstalk.com/health/ping", { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  testTaskGet(): Observable<any> {
    return this.http.get<object>("Revagendakp-env.eba-mkadq2gc.us-east-1.elasticbeanstalk.com/tasks/1",
    {observe: 'response',
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  errorHandler(e: any): any {
    console.log("Error handler invoked...");
    let errorMessage = '';
    if (e.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = e.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${e.status}\nMessage: ${e.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }



}

export class Task {
  name: string;
  description: string;
  completed: boolean;

  constructor(_name: string, _description: string) {
    this.name = _name;
    this.description = _description;
    this.completed = false;
  }
}

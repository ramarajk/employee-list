import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment'
import { methodTypes } from '../models/methodTypes'
@Injectable({
    providedIn: 'root'
})
export class callMiddlewareService {

    constructor(private http: HttpClient) { }

    callMiddlewareService(): Observable<any> {

        return this.http.get("http://localhost:5135/Dictionary/retrieveEmpDetail");
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpClientService {
    private token: string;
    constructor(private http: HttpClient) { }
    get(url) {
        return this.http.get(url);
    }

    post(url, body) {
        return this.http.post(url, body);
    }
    
}

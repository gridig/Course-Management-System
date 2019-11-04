import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    url: string;
    constructor(
        private http: HttpClient
    ) {
        this.url = `${environment.API_URL}login`;
    }

    login(username: string, password: string) {
        return this.http.post(this.url, { username, password });
    }

    get isLoggedIn(): boolean {
        return !!localStorage.getItem('currentUser');
    }

}
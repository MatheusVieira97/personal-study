import { Injectable } from "@angular/core";


const KEY = 'authToken'
@Injectable({ providedIn: 'root'})
export class TokenService {

    hasToken(): boolean {
        return !!this.getToken()
    }

    setToken(token: string) {
        return window.localStorage.setItem(KEY, token);
    }

    getToken() {
       return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HTTP_REST_API_REQ {
    private URL = "http://192.168.1.200:5000";
    private headers = new HttpHeaders ({ "Content-Type":"application/json" });

    constructor(private client: HttpClient){ }

    public async post(route:string, payload: object) {
        return this.client.post(this.URL + route, JSON.stringify(payload), {headers:this.headers}).toPromise()
    }

    public async get(route: string) {
        this.client.get(this.URL + route)
        .subscribe(
            value => {
                console.log("Read API from ", route, " -> Done \n", value)
            },
            error => {
                console.log("Read API from ", route, " -> Error \n", error)
                return error
            },
        )
    }
}
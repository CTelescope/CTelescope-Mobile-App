import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HTTP_Requests {
    private URL = "http://192.168.1.200:5000";
    private headers = new HttpHeaders ({ "Content-Type":"application/json" });

    constructor(private client: HttpClient){ }

    public async post(route:string, payload: object):Promise<object> {
        let data: object;

        await this.client.post(this.URL + route, JSON.stringify(payload), {headers:this.headers}).toPromise()
        .then( response => {  data = response  } )
        .catch( 
            error => { 
                console.log(error);
                data = {"error":(error["name"])}
            }
        )
        return data;
    }

    public async get(route:string):Promise<object> {
        let data: object;
        
        await this.client.get(this.URL + route).toPromise()
        .then( response => { data = response } )
        .catch( 
            error => { 
                console.log(error);
                data = {"error":(error["name"])}
            }
        )
        return data;
    }
}
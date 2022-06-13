import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HTTP_Requests {
    private URL = "http://192.168.1.30:5000";
    private headers = new HttpHeaders ({ "Content-Type":"application/json" });

    constructor(private client: HttpClient){ }

    public async post(route:string, payload: object):Promise<object> {
        let data: object;
        let error:number;

        await this.client.post(this.URL + route, JSON.stringify(payload), {headers:this.headers}).toPromise()
        .then( response => {  
                data = response  
                error = 0;
            }
        ).catch( 
            msg_error => { 
                console.log(msg_error);
                data = {"error":(msg_error["name"])}
                error = 1;
            }
        )
        // return {data, error};
        return data
    }

    public async get(route:string):Promise<object> {
        let data: object;
        let error:number;
        
        await this.client.get(this.URL + route).toPromise()
        .then( response => {  
                data = response  
                error = 0;
            }
        ).catch( 
            msg_error => { 
                console.log(msg_error);
                data = {"error":(msg_error["name"])}
                error = 1;
            }
        )
        // return {data, error};
        return data
    }

    public async delete(route:string):Promise<object> {
        let data: object;
        let error:number;

        await this.client.delete(this.URL + route).toPromise()
        .then( response => {  
                data = response  
                error = 0;
            }
        ).catch( 
            msg_error => { 
                console.log(msg_error);
                data = {"error":(msg_error["name"])}
                error = 1;
            }
        )
        // return {data, error};
        return data
    }
}
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CT_Position{
  public Name:string = "?";
  public RA:string  = "?";
  public Dec:string = "?";
  public Alt:string = "?";
  public Azm:string = "?";
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Apiservices {

  constructor(private http:HttpClient) { }//services -to implement busines logic
  getProduct() { //to take data from api,then gotoconif.ts and type the provideHttpClient
    return this.http.get('https://fakestoreapi.com/products');
  }
}

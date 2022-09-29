import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API_URL : string = environment.API_URL
  private readonly API_KEY : string = environment.API_KEY

  constructor(private readonly http : HttpClient) { }

  findAll() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API_URL}/Products?select=*`, {
      headers: {
        'apikey' : this.API_KEY
      }
    })
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products/category/smartphones';
  constructor(private http: HttpClient){}
  getProducts(){
    return this.http.get<any>(this.apiUrl);
  }
}

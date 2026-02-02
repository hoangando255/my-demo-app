import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'product-list';

  constructor(private http: HttpClient){}
  getProducts(){
    return this.http.get<any>(this.apiUrl);
  }
  addProduct(product: any){
    return this.http.post(this.apiUrl, product);
  }
}

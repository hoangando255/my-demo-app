import {Injectable} from '@angular/core';
import {count} from 'rxjs';

export interface CartItem{
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService{
  private items: CartItem[] =[];

  addToCart(product: any){
    const existingItem = this.items.find(i => i.id === product.id);
    if(existingItem){
      existingItem.quantity++;
    } else{
      this.items.push({...product, quantity: 1});
    }
  }

  getItems() {return this.items;}
  incrementQuantity(id: number){
    const item = this.items.find(i => i.id === id);
    if(item) item.quantity++;
  }
  decrementQuantity(id: number){
    const item = this.items.find(i => i.id === id);
    if(item && item.quantity > 1){
      item.quantity--;
    } else{
      this.removeItem(id);
    }
  }
  removeItem(id: number){
    this.items = this.items.filter(i => i.id !== id);
  }
  getTotalPrice(){
    return this.items.reduce((total, item) => total + (item.price * item.quantity),0);
  }
  getCartCount(){
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }
}

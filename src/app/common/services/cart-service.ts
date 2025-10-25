import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService{

private cartItems: any[] = [];
private cartCount = new BehaviorSubject<number>(0);


cartCount$ = this.cartCount.asObservable();


addToCart(product: any) {
const existing = this.cartItems.find(p => p.id === product.id);
if (existing) {
existing.qty++;
} else {
this.cartItems.push({ ...product, qty: 1 });
}
this.updateCount();
}


getCartItems() {
return this.cartItems;
}


clearCart() {
this.cartItems = [];
this.updateCount();
}


private updateCount() {
const total = this.cartItems.reduce((sum, item) => sum + item.qty, 0);
this.cartCount.next(total);
}
}

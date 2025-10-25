import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../common/services/cart-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
cartCount = 0;
constructor(private cartService: CartService) {
this.cartService.cartCount$.subscribe(c => this.cartCount = c);
}
}

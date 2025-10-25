import { Component } from '@angular/core';
import { CartService } from '../../common/services/cart-service';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
 products: Product[] = [];
  paginatedProducts: Product[] = [];
  currentPage = 1;
  itemsPerPage = 10; // 10 products per page
  totalPages = 1;

  cart: Product[] = [];

  ngOnInit() {
    // Generate 100 products
    for (let i = 1; i <= 100; i++) {
      this.products.push({
        id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 100) + 10,
        image: `https://picsum.photos/200/200?random=${i}`,
      });
    }

    this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedProducts = this.products.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  addToCart(product: Product) {
    this.cart.push(product);
    alert(`${product.name} added to cart!`);
  }
}

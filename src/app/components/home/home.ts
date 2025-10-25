import { AfterViewInit, Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";
import { ProductList } from "../product-list/product-list";
declare var Layout: any;  // Declare the JS object from layout.js
declare var $: any;
@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductList, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof Layout !== 'undefined') {
      Layout.init();
      Layout.initOWL();
      Layout.initTwitter();
    }
  }
 bg8 = 'assets/pages/img/frontend-slider/bg9.jpg';
}

import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

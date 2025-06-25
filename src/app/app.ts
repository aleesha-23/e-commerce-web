import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./ui/navbar/navbar";
import { Carousel } from "./ui/carousel/carousel";
import { Card } from "./ui/card/card";
import { Products } from "./page/products/products";
import { Footer } from "./ui/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerce';
}

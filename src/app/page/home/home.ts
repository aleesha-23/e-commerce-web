import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../ui/carousel/carousel';
import { Card } from '../../ui/card/card';
import { Products } from '../products/products';
import { Footer } from "../../ui/footer/footer";

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [Carousel, Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

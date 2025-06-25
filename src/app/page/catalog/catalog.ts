import { Component } from '@angular/core';
import { Products } from "../products/products";


@Component({
  selector: 'app-catalog',
  imports: [Products],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {

}

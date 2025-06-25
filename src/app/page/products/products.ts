import { Component } from '@angular/core';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: any[] = [];
  constructor(private apiservices:Apiservices) {}
  ngOnInit() {
    this.apiservices.getProduct().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

}

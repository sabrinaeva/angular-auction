import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../service/product.service";

@Component({
  selector: 'app-produt',
  templateUrl: './produt.component.html',
  styleUrls: ['./produt.component.css']
})
export class ProdutComponent implements OnInit {

  products:Product[];

  constructor(private productService:ProductService) {
    this.products = productService.getAllProducts();
  }

  ngOnInit() {
  }

}

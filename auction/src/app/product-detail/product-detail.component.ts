import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment, Product, ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isHiddenSend: boolean = true;
  product:Product;
  comments:Comment[];
  content: string;
  rating: number;

  constructor(private routInfo:ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let productId = this.routInfo.snapshot.params['id'];
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getCommentByProductId(productId);
  }
  submitComment(){
    let commnet = new Comment(0,this.product.id, this.content, this.rating ,'XX','2017-6-9');
    this.isHiddenSend = true;
    this.comments.unshift(commnet);
  }

}

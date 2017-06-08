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
  newComment: string = "";
  newRating: number = 5;

  constructor(private routInfo:ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let productId = this.routInfo.snapshot.params['id'];
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getCommentByProductId(productId);
  }
  submitComment(){
    let comment = new Comment(0,this.product.id, this.newComment, this.newRating ,'XX','2017-6-9');
    this.isHiddenSend = true;
    this.comments.unshift(comment);
    this.newRating = 5;
    this.newComment = '';
    var sum = this.comments.reduce((sum, comment) => sum += comment.rating, 0);
    this.product.rating = sum/this.comments.length;
  }


}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModel:FormGroup;
  categories:string[];

  constructor( fb:FormBuilder, private productService:ProductService) {
    this.formModel = fb.group({
      userName: ['', Validators.required],
      price:[null],
      category:['-1']
    });
    this.categories = this.productService.getAllcategories();

  }

  ngOnInit() {
  }
  searchProduct(){
    console.log(this.formModel.value);
    console.log('表单验证结果：'+this.formModel.valid);
  }

}

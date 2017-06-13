import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  products:Product[];
  comments: Comment[];

  constructor() {
    this.products = [
      new Product(1,'三星S88',['手机','电子产品'],4,2000,'三星新款手机'),
      new Product(2,'苹果7',['手机','电子产品'],5,7000,'苹果7 plus'),
      new Product(3,'衬衣',['衬衣','服饰'],2,200,'这个是白色衬衣 女式的'),
      new Product(4,'电脑',['电子产品'],3,12000,'mac苹果电脑'),
      new Product(5,'鞋子',['高跟','凉鞋'],2.6,300,'这个是一款女式高跟凉鞋')
    ];
    this.comments = [
      new Comment(1,1,'三星手机会爆炸',2.5,'someone','2017-8-9'),
      new Comment(2,1,'这个新款手机不会爆炸',5,'someone','2017-10-9'),
      new Comment(3,2,'苹果手机好用，等8',4.8,'someone','2017-3-9'),
      new Comment(4,3,'这个衬衣不够白',2.5,'someone','2017-8-9'),
      new Comment(5,4,'这个电脑很不错',2.5,'someone','2017-8-9')
    ]
  }
  getAllProducts(){
    return this.products;
  }
  getCommentByProductId(productId:number):Comment[]{
    return this.comments.filter((item) =>{
      return item.productId == productId;
    })
  }
  getProductById(productId:number):Product{
    return this.products.find((item) =>{
      return item.id == productId;
    })
  }

  getAllcategories():string[]{
    return ['电子产品','鞋子','图书']

  }

}

export class Product{
  constructor(
    public id: number,
    public name: string,
    public categories: [string],
    public rating: number,
    public price: number,
    public desc: string

  ){}
}

export class Comment{
  constructor(
    public id: number,
    public productId: number,
    public content: string,
    public rating: number,
    public user: string,
    public timestamp: string


  ){}

}

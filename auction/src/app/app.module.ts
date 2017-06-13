import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProdutComponent } from './produt/produt.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import {ProductService} from "./service/product.service";
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {RouterModule, Routes} from "@angular/router";
import { StarsComponent } from './stars/stars.component';

const routes: Routes =  [
  {path: '',  component: HomeComponent},
  {path:'product/:id', component: ProductDetailComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutComponent,
    ProductDetailComponent,
    SearchComponent,
    FooterComponent,
    CarouselComponent,
    HeaderComponent,
    FilterProductPipe,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

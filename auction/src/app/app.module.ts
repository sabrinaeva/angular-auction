import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutComponent } from './produt/produt.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FilterProductPipe } from './pipe/filter-product.pipe';

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
    FilterProductPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

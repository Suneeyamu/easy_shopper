import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { AddToCartComponent } from './features/add-to-cart/add-to-cart.component';
import { ProfileComponent } from './features/profile/profile.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { SearchComponent } from './features/search/search.component';
import { CategoryListComponent } from './features/category-list/category-list.component';
import { NavbarComponent } from './features/common/navbar/navbar.component';
import { FooterComponent } from './features/common/footer/footer.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './features/auth/forget-password/forget-password.component';
import { PageNotFoundComponent } from './features/auth/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    AddToCartComponent,
    ProfileComponent,
    WishlistComponent,
    ProductDetailsComponent,
    SearchComponent,
    CategoryListComponent,
    NavbarComponent,
    FooterComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { HomeComponent } from './features/home/home.component';

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
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

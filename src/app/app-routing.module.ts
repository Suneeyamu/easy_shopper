import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { NavbarComponent } from './features/common/navbar/navbar.component';
import { FooterComponent } from './features/common/footer/footer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { PageNotFoundComponent } from './features/auth/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { AddToCartComponent } from './features/add-to-cart/add-to-cart.component';
import { CategoryListComponent } from './features/category-list/category-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  },
  {
    path: "sign-in",
    component: SignInComponent 
  },
  {
    path: "sign-up",
    component: SignUpComponent 
  },
  {
    path: "dashboard",
    component: DashboardComponent, children:[
      {
        path:'',
        component: HomeComponent
      },
      {
        path: "productList/:id",
        component: ProductListComponent 
      },
      {
        path: "productDetails/:id",
        component: ProductDetailsComponent 
      },
      {
        path: "categoryList",
        component: CategoryListComponent 
      },
      {
        path: "wishlist",
        component: WishlistComponent 
      },
      {
        path: "cart",
        component: AddToCartComponent
      }
    ] 
  },
  {path:'**', component: PageNotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

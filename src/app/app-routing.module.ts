import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { NavbarComponent } from './features/common/navbar/navbar.component';
import { FooterComponent } from './features/common/footer/footer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';

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
    component: DashboardComponent 
  },
  {
    path: "productList",
    component: ProductListComponent 
  },
  {
    path: "productDetails",
    component: ProductDetailsComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

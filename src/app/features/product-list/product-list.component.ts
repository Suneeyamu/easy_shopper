import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/shared/services/data-communication.service';
import { ProductListService } from 'src/app/shared/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any;
  defaultImage =
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1c8e9888-aa99-4e1c-9f54-4e2d17b186dd/air-max-plus-shoes-pBxkKX.png';
  wishlist: number[] = [];

  constructor(
    private productListService: ProductListService,
    private dataService: DataCommunicationService
  ) {}

  ngOnInit() {
    this.productListService.getProducts().subscribe((data) => {
      const sessionProducts = JSON.parse(
        sessionStorage.getItem('wishlist') || '[]'
      );
      this.wishlist = sessionProducts.map((product: any) => product.id);

      this.products = data;
    });
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage;
  }

  toggleWishlist(product: any) {
    const index = this.wishlist.indexOf(product.id);
    const setProducts = JSON.parse(sessionStorage.getItem('wishlist') || '[]');

    if (index === -1) {
      this.wishlist.push(product.id); // Add product to wishlist
      setProducts.push(product);
    } else {
      this.wishlist.splice(index, 1); // Remove product from wishlist
      setProducts.pop(index, 1);
    }

    sessionStorage.setItem('wishlist', JSON.stringify(setProducts));
    this.dataService.triggerRefreshLogout();
  }

  addToCart(product: any) {
    const index = this.wishlist.indexOf(product.id);
    const setProducts = JSON.parse(sessionStorage.getItem('cart') || '[]');
    if (index === -1) {
      setProducts.push(product);
    } else {
      setProducts.pop(index, 1);
    }
    sessionStorage.setItem('cart', JSON.stringify(setProducts));
    this.dataService.triggerRefreshLogout();
  }
}

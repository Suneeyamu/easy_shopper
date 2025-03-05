import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/shared/services/data-communication.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  products: any = [];
  defaultImage =
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1c8e9888-aa99-4e1c-9f54-4e2d17b186dd/air-max-plus-shoes-pBxkKX.png';

  constructor(private dataService: DataCommunicationService) {}

  ngOnInit(): void {
    this.products = JSON.parse(sessionStorage.getItem('wishlist') || '[]');
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage;
  }

  removeWishlist(product: any) {
    const setProducts = JSON.parse(sessionStorage.getItem('wishlist') || '[]');
    setProducts.pop(product.id, 1);
    this.dataService.info(`${product.name} removed from wishlist`, 'Wishlist');
    this.updateSessionStorage(setProducts);
  }

  updateSessionStorage(products: any) {
    sessionStorage.setItem('wishlist', JSON.stringify(products));
    this.dataService.triggerRefreshLogout();
    window.location.reload();
  }
}

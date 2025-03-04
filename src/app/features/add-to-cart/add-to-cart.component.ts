import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/shared/services/data-communication.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  products: any = [];
  defaultImage =
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1c8e9888-aa99-4e1c-9f54-4e2d17b186dd/air-max-plus-shoes-pBxkKX.png';

  quantity: number = 1;

  constructor(private dataService: DataCommunicationService) {}

  ngOnInit(): void {
    this.products = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.products = this.products.map((product: any) => {
      product.quantity = 1;
      return product;
    });
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage;
  }

  removeCart(product: any) {
    const setProducts = JSON.parse(sessionStorage.getItem('cart') || '[]');
    setProducts.pop(product.id, 1);
    this.updateSessionStorage(setProducts);
  }

  updateSessionStorage(products: any) {
    sessionStorage.setItem('cart', JSON.stringify(products));
    this.dataService.triggerRefreshLogout();
    window.location.reload();
  }
  updateQuantity(productId: number, action: string) {
    const product = this.products.find((p: any) => p.id === productId);
    if (!product) return;

    if (action === 'increase') {
      product.quantity++;
    } else if (action === 'decrease' && product.quantity > 1) {
      product.quantity--;
    }
  }

  getTotalMRP(): number {
    return this.products
      .reduce(
        (total: any, product: any) =>
          total + product.currentPrice * product.quantity,
        0
      )
      .toFixed(2);
  }

  getTotalDiscount(): number {
    const totalDiscount =
      this.getTotalMRP() -
      this.products.reduce(
        (total: any, product: any) =>
          total + product.currentPrice * product.quantity,
        0
      );
    return Number(totalDiscount.toFixed(2));
  }

  getTotalAmount(): number {
    const totalAmount =
      this.products.reduce(
        (total: any, product: any) =>
          total + product.currentPrice * product.quantity,
        0
      ) + 20; // 20 is Platform Fee
    return Number(totalAmount.toFixed(2));
  }
}

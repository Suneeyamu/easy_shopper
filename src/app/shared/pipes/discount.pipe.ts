import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(originalPrice: number, currentPrice: number): unknown {
    if (!originalPrice || !currentPrice || originalPrice <= currentPrice) {
      return ''; // No discount if original price is missing or lower than the current price
    }
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return `(${discount.toFixed(0)}% OFF)`;
  }
}

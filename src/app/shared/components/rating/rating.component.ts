import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() rating: number = 0; 
  stars: number[] = [];

  ngOnChanges() {
    this.generateStars();
  }

  private generateStars() {
    this.stars = [];
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      this.stars.push(1); // Full star
    }
    if (hasHalfStar) {
      this.stars.push(0.5); // Half star
    }
    while (this.stars.length < 5) {
      this.stars.push(0); // Empty stars
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    name: string = 'John Doe';
    addToCart: number = 0;
    product = {
        name: 'iPhone X',
        price: 789,
        color: 'Black',
        discount: 8.5,
        inStock: 5,
        pImage: './assets/img/iphone.png'
    }

    getDiscountedPrice() {
        let discountedPrice: number = this.product.price - (this.product.price * this.product.discount / 100);
        return Math.floor(discountedPrice);
    }
    onNameChange(event: any) {
        this.name = event.target.value;
        //console.log(event.target.value);
    }
    incrementAddToCart() {
        if(this.product.inStock > this.addToCart) {
            this.addToCart++;
        }
        
    }
    decrementAddToCart() {
        if(this.addToCart > 0) {
            this.addToCart--;
            
        }
        
    }
}

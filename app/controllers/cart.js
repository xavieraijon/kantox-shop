import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }
  get tax() {
    return 0.21 * this.subtotal;
  }
  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    let executed = false;
    
    let parsedCount = parseInt(count, 10);

    if (parsedCount >= 0) {
      item.count = parsedCount;
    } else {
      item.count = 0;
    }

    // Green Tea
    // if (item.id == '1' && item.count >= 2) {
    //   if (item.count % 2 == 0) {
    //     item.price = item.price / 2;
    //     console.log(item.price);
    //   } else {
    //     item.price = (item.count - 1) * item.price / 2;
    //     console.log(item.price);
    //   }
    // }

    // // Strawberries
    // if (item.id == '2' && item.count >= 3) {
    //   item.price = 4.50;
    // } else if (item.id == '2' && item.count < 3) {
    //   item.price = 5;
    // }

    // // Coffee
    // if (item.id == '3' && item.count >= 3) {
    //   item.price = item.price * (1/3);
    //   console.log(item.price);
    // } else if (item.id == '3' && item.count < 3) {
    //   item.price = 11.23;
    // }
  }
}

import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart() {
    console.log(this.args);
    const { id, name, image, price } = this.args;
    this.cart.addItem({
      id,
      name,
      image,
      price: price.original,
    });
  }
}

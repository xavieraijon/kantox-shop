import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  id;
  name;
  image;
  price;

  constructor(item) {
    this.count = item.count;
    this.id = item.id;
    this.name = item.name;
    this.image = item.image;
    this.price = item.price;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(({ name }) => {
      return name === item.name;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
  }
}

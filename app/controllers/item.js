import Controller from '@ember/controller';

export default class ItemController extends Controller {
  get productImage() {
    return this.model.image;
  }
}

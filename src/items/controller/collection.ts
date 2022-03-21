import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findAllItems } from '../service';
import * as hal from '../format/hal';

class ItemCollectionController extends Controller {
  async get(ctx: Context) {
    const items = await findAllItems();
    ctx.response.type = 'application/hal+json';
    ctx.response.body = hal.formatCollection(items);
  }
}

export default new ItemCollectionController();

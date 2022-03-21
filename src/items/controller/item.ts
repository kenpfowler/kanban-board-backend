import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findItemById } from '../service';
import * as hal from '../format/hal';

class ItemController extends Controller {
  async get(ctx: Context) {
    const id = parseInt(ctx.params.id, 10);
    const [items] = await findItemById(id);
    ctx.response.type = 'application/hal+json';
    ctx.response.body = hal.formatItem(items);
  }
}

export default new ItemController();

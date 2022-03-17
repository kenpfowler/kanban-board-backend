import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import db from '../../database';

class ItemsItemController extends Controller {
  async get(ctx: Context) {
    const id = ctx.params.id;
    const [items] = await db.query('SELECT * from items WHERE id = ?', id);
    ctx.response.type = 'application/json';
    ctx.response.body = items;
  }
}

export default new ItemsItemController();

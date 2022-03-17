import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import db from '../../database';

class ItemCollectionController extends Controller {
  async get(ctx: Context) {
    const [items] = await db.query('SELECT * from items');
    ctx.response.type = 'application/json';
    ctx.response.body = items;
  }
}

export default new ItemCollectionController();

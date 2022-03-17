import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import db from '../../database';

class ColumnCollectionController extends Controller {
  async get(ctx: Context) {
    const [columns] = await db.query('SELECT * from columns');
    ctx.response.type = 'application/json';
    ctx.response.body = columns;
  }
}

export default new ColumnCollectionController();

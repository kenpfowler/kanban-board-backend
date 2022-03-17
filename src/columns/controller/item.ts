import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import db from '../../database';

class ColumnItemController extends Controller {
  async get(ctx: Context) {
    const id = ctx.params.id;
    const [column] = await db.query('SELECT * from columns WHERE id = ?', id);
    ctx.response.type = 'application/json';
    ctx.response.body = column;
  }
}

export default new ColumnItemController();

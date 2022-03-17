import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import db from '../../database';

class BoardItemController extends Controller {
  async get(ctx: Context) {
    const id = ctx.params.id;
    const [board] = await db.query('SELECT * from boards WHERE id = ?', id);
    ctx.response.type = 'application/json';
    ctx.response.body = board;
  }
}

export default new BoardItemController();

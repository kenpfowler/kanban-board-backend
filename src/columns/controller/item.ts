import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findColumnById } from '../service';
import * as hal from '../format/hal';

class ColumnItemController extends Controller {
  async get(ctx: Context) {
    const id = parseInt(ctx.params.id, 10);
    const [column] = await findColumnById(id);
    ctx.response.type = 'application/hal+json';
    ctx.response.body = hal.item(column);
  }
}

export default new ColumnItemController();

import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findAllColumns } from '../service';
import * as hal from '../format/hal';
class ColumnCollectionController extends Controller {
  async get(ctx: Context) {
    const columns = await findAllColumns();
    ctx.response.type = 'application/hal+json';
    ctx.response.body = hal.collection(columns);
  }
}

export default new ColumnCollectionController();

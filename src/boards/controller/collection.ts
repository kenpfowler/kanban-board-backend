import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findAllBoards } from '../service';

class ColumnCollectionController extends Controller {
  async get(ctx: Context) {
    const boards = await findAllBoards();
    ctx.response.type = 'application/json';
    ctx.response.body = boards;
  }
}

export default new ColumnCollectionController();

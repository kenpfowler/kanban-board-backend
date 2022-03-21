import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findAllBoards } from '../service';
import * as hal from '../format/hal';

class ColumnCollectionController extends Controller {
  async get(ctx: Context) {
    const boards = await findAllBoards();
    ctx.response.type = 'application/hal+json';
    ctx.response.body = hal.collection(boards);
  }
}

export default new ColumnCollectionController();

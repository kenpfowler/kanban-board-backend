import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findBoardById } from '../service';
import * as hal from '../format/hal';

class BoardItemController extends Controller {
  async get(ctx: Context) {
    const id = parseInt(ctx.params.id, 10);
    const [board] = await findBoardById(id);
    ctx.response.type = 'application/hal+json';
    ctx.response.body = hal.item(board);
  }
}

export default new BoardItemController();

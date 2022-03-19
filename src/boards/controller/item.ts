import { Controller } from '@curveball/controller/dist';
import { Context } from '@curveball/core';
import { findBoardById } from '../service';

class BoardItemController extends Controller {
  async get(ctx: Context) {
    const id = parseInt(ctx.params.id, 10);
    const [board] = await findBoardById(id);
    ctx.response.type = 'application/json';
    ctx.response.body = board;
  }
}

export default new BoardItemController();

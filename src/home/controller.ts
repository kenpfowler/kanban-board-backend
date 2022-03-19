import Controller from '@curveball/controller';
import { Context } from '@curveball/core';
import db from '../database';
import { home } from './formats/hal';

const itemFields = [
  'items.item_id',
  'items.content',
  'items.column_id',
  'items.item_position',
];
const columnFields = [
  'columns.column_id',
  'columns.title',
  'columns.column_position',
  'columns.board_id',
];

const query = `SELECT ${columnFields
  .concat(itemFields)
  .join(', ')} FROM items JOIN columns ON items.column_id = columns.column_id`;

class HomeController extends Controller {
  async get(ctx: Context) {
    const [itemRow] = await db.query(query);
    const [columnRow] = await db.query(
      `SELECT ${columnFields.join(', ')} FROM columns`
    );
    const items: any = {};
    const columns: any = {};
    const columnOrder: any = [];

    columnRow.forEach((element: any) => {
      const columnId = `column-${element.column_id}`;
      columns[columnId] = {
        id: columnId,
        title: element.title,
        itemIds: [],
        position: element.column_position,
      };
      columnOrder[element.column_position - 1] = columnId;
    });

    itemRow.forEach((element: any) => {
      const itemId = `item-${element.item_id}`;
      const columnId = `column-${element.column_id}`;

      items[itemId] = {
        id: itemId,
        content: element.content,
        position: element.position,
      };

      columns[columnId].itemIds[element.item_position - 1] = itemId;
    });

    ctx.response.type = 'application/hal+json';
    ctx.response.body = home({
      items: items,
      columns: columns,
      columnOrder: columnOrder,
    });
  }
}

export default new HomeController();

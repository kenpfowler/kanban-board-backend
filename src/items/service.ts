import db from '../database';

export const findAllItems = async () => {
  const [items] = await db.query('SELECT * from items');
  return items;
};

export const findItemById = async (id: number) => {
  const [item] = await db.query('SELECT * from items WHERE item_id = ?', id);
  return item;
};

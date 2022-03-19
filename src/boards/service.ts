import db from '../database';

export const findAllBoards = async () => {
  const [boards] = await db.query('SELECT * from boards');
  return boards;
};

export const findBoardById = async (id: number) => {
  const [board] = await db.query('SELECT * from boards WHERE id = ?', id);
  return board;
};

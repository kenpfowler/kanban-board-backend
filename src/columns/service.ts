import db from '../database';

export const findAllColumns = async () => {
  const [columns] = await db.query('SELECT * from columns');
  return columns;
};

export const findColumnById = async (id: number) => {
  const [column] = await db.query(
    'SELECT * from columns WHERE column_id = ?',
    id
  );
  return column;
};

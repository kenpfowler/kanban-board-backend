import { Column } from '../../types';

export const item = (column: Column) => {
  return {
    _links: {
      self: {
        href: `/columns/${column.column_id}`,
      },
      collection: {
        title: 'List of Columns',
        href: '/columns',
      },
    },
    [`column-${column.column_id}`]: column,
  };
};

export const collection = (columns: Column[]) => {
  return {
    _links: {
      self: {
        href: '/columns',
      },
      column: columns.map((column) => ({
        href: `/columns/${column.column_id}`,
        title: column.title,
      })),
    },
    total: columns.length,
    _embedded: {
      column: columns.map((column) => item(column)),
    },
  };
};

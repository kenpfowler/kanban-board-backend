import { Column } from '../../types';

export const formatColumn = (column: Column) => {
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
    column: column,
  };
};

export const formatColumnCollection = (columns: Column[]) => {
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
      item: columns.map((column) => formatColumn(column)),
    },
  };
};

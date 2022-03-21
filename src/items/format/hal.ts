import { Item } from '../../types';

export const formatItem = (item: Item) => {
  return {
    _links: {
      self: {
        href: `/items/${item.item_id}`,
      },
      collection: {
        title: 'List of Items',
        href: '/items',
      },
    },
    [`item-${item.item_id}`]: item,
  };
};

export const formatCollection = (items: Item[]) => {
  return {
    _links: {
      self: {
        href: '/items',
      },
      item: items.map((item) => ({
        href: `/items/${item.item_id}`,
        title: item.content,
      })),
    },
    total: items.length,
    _embedded: {
      item: items.map((item) => formatItem(item)),
    },
  };
};

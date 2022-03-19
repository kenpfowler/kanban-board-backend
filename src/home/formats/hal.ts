import fs from 'fs';
import path from 'path';

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../package.json'), 'utf-8')
);

export const home = (res: any) => {
  return {
    _links: {
      self: {
        href: '/',
      },
      'boards-collection': {
        href: '/boards',
        title: 'List of all Kanban Boards',
      },
      'columns-collection': {
        href: '/columns',
        title: 'List of Kanban Board Columns',
      },
      'items-collection': {
        href: '/items',
        title: 'List of Kanban Column items',
      },
    },
    name: pkg.name,
    version: pkg.version,
    board: res,
  };
};

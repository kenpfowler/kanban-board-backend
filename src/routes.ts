import router from '@curveball/router';
import homeController from './home/controller';
import BoardItemController from './boards/controller/item';
import ColumnCollectionController from './columns/controller/collection';
import ColumnItemController from './columns/controller/item';
import BoardCollectionController from './boards/controller/collection';
import ItemCollectionController from './items/controller/collection';
import ItemsItemController from './items/controller/item';

export default [
  router('/', homeController),
  router('/boards', BoardCollectionController),
  router('/boards/:id', BoardItemController),
  router('/columns', ColumnCollectionController),
  router('/columns/:id', ColumnItemController),
  router('/items', ItemCollectionController),
  router('/items/:id', ItemsItemController),
];

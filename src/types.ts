export type Column = {
  column_id: string;
  title: string;
  itemIds: string[];
  column_position: number;
};

export type Item = {
  item_id: string;
  content: string;
  item_position: number;
};

export interface Board {
  board_id: number;
  title: string;
}

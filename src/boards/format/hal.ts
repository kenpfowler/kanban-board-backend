import { Board } from '../../types';

export const item = (board: Board) => {
  return {
    _links: {
      self: {
        href: `/boards/${board.board_id}`,
      },
      collection: {
        title: 'List of boards',
        href: '/boards',
      },
    },
    [`board-${board.board_id}`]: board,
  };
};

export const collection = (boards: Board[]) => {
  return {
    _links: {
      self: {
        href: '/boards',
      },
      board: boards.map((board) => ({
        href: `/boards/${board.board_id}`,
        title: board.title,
      })),
    },
    total: boards.length,
    _embedded: {
      board: boards.map((board) => item(board)),
    },
  };
};

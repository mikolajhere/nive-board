import { Column } from "./Column";

export const Board = () => {
  return (
    <div className="board-container">
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};

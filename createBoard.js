const createBoard = () => {
  const wrapper = document.querySelector(".wrapper");
  const board = document.createElement("div");
  board.classList.add("board");
  wrapper.appendChild(board);
};

export default createBoard;

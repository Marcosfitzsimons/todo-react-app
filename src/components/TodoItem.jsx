import React from "react";

const TodoItem = ({ todoItem, handleIsCheck }) => {
  return (
    <li className="todo-item text-neutral first:rounded-t-lg h-14 bg-secondary flex px-3 border-b-2 border-b-primary justify-between items-center">
      <div className="todo-wrapper flex gap-1 h-full flex-grow">
        <div className="check-container w-8 aspect-square flex">
          {todoItem.isCheck ? (
            <div
              className="active check-circle relative border border-neutral h-[43%] aspect-square rounded-full cursor-pointer self-center"
              onClick={() => handleIsCheck(todoItem.id)}
            >
              <div className="check-icon active absolute w-4 h-3"></div>
            </div>
          ) : (
            <div
              className="check-circle relative border border-neutral h-[43%] aspect-square rounded-full cursor-pointer self-center"
              onClick={() => handleIsCheck(todoItem.id)}
            >
              <div className="absolute w-4 aspect-square"></div>
            </div>
          )}
        </div>
        <p className="h-full self-center pt-1 flex-grow flex items-center border-none text-sm">
          {todoItem.content}
        </p>
      </div>

      <button className="todo-item-right aspect-square w-5 cursor-pointer"></button>
    </li>
  );
};

export default TodoItem;

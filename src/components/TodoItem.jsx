import React, { useEffect, useState } from "react";
import { format } from "date-fns/esm";
import toast from "react-hot-toast";

const TodoItem = ({ todoItem, setTodos, todos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todoItem.id));
    toast.success("Todo deleted successfully.");
  };

  return (
    <li className="todo-item text-neutral first:rounded-t-lg h-14 bg-secondary flex px-3 border-b-2 border-b-primary justify-between items-center">
      <div className="todo-wrapper flex gap-1 h-full flex-grow">
        <div className="check-container w-8 aspect-square flex">
          {todoItem.completed ? (
            <div className="active check-circle relative border border-neutral h-[44%] aspect-square rounded-full cursor-pointer self-center">
              <div className="check-icon active absolute w-4 h-3"></div>
            </div>
          ) : (
            <div className="check-circle relative border border-neutral h-[44%] aspect-square rounded-full cursor-pointer self-center">
              <div className="absolute w-4 aspect-square"></div>
            </div>
          )}
        </div>
        <div className="text-container flex flex-col justify-center">
          <p
            className={
              todoItem.completed
                ? "line-through text-base pt-2 flex-grow flex items-center border-none"
                : "text-base pt-2 flex-grow flex items-center border-none"
            }
          >
            {todoItem.text}
          </p>
          <p className="text-xs flex items-center pb-1">
            {format(new Date(todoItem.time), "p, MM/dd/yyyy")}
          </p>
        </div>
      </div>

      <button
        className="todo-item-right aspect-square w-5 cursor-pointer"
        onClick={handleDelete}
      ></button>
    </li>
  );
};

export default TodoItem;

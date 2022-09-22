import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TodoItem = ({ todoItem, setTodos, todos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todoItem.id));
    toast.success("Todo deleted successfully.");
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todoItem.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <li className="todo-item text-neutral first:rounded-t-lg h-14 bg-secondary flex px-3 border-b-2 border-b-primary justify-between items-center cursor-pointer">
      <div className="todo-wrapper flex gap-1 h-full flex-grow">
        <div className="check-container w-8 aspect-square flex">
          {todoItem.completed ? (
            <div
              className="active check-circle relative border border-neutral h-[44%] aspect-square rounded-full cursor-pointer self-center"
              onClick={handleComplete}
            >
              <div className="check-icon active absolute w-4 h-3"></div>
            </div>
          ) : (
            <div
              className="check-circle relative border border-neutral hover:border-neutral/60 h-[44%] aspect-square rounded-full cursor-pointer self-center"
              onClick={handleComplete}
            >
              <div className="absolute w-4 aspect-square"></div>
            </div>
          )}
        </div>
        <div className="text-container flex flex-col justify-center">
          <p
            className={
              todoItem.completed
                ? " text-sm lg:text-base line-through opacity-60 pt-2 flex-grow flex items-center border-none"
                : " text-sm lg:text-base pt-2 flex-grow flex items-center border-none"
            }
          >
            {todoItem.text}
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

import React from "react";
import { useState } from "react";
import toast, { Toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const NewTodo = ({ inputTodo, setInputTodo, todos, setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTodo.length >= 60) {
      toast.error(`A new todo shouldn't be longer than 60 characters.`);
    } else {
      if (inputTodo) {
        setTodos([
          ...todos,
          {
            id: uuidv4(),
            text: inputTodo,
            completed: false,
            time: new Date().toLocaleString(),
          },
        ]);
        setInputTodo("");
        toast.success("Todo Added Successfully.");
      } else {
        toast.error(`A new todo shouldn't be empty.`);
      }
    }

    inputTodo.length === 0
      ? console.log("add character")
      : console.log(`that's all right`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-wrapper flex gap-1 h-full flex-grow"
    >
      <div className="check-container w-8 aspect-square flex">
        <div className="check-circle relative border border-neutral h-[43%] aspect-square rounded-full cursor-pointer self-center">
          <div className="absolute w-4 aspect-square"></div>
        </div>
      </div>
      <input
        onChange={(e) => setInputTodo(e.target.value)}
        value={inputTodo}
        name="newtodo"
        type="text"
        placeholder="Create a new todo..."
        className="h-full self-center pt-1 flex-grow border-none text-sm lg:text-base text-neutral bg-secondary outline-none placeholder:font-normal placeholder:text-neutral"
      />
      <button
        type="submit"
        className="add-btn aspect-square w-6 cursor-pointer"
      ></button>
    </form>
  );
};

export default NewTodo;

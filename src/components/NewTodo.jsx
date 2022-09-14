import React from "react";

const NewTodo = () => {
  return (
    <>
      <div className="todo-wrapper flex gap-1 h-full flex-grow">
        <div className="check-container w-8 aspect-square flex">
          <div className="check-circle relative border border-neutral h-[43%] aspect-square rounded-full cursor-pointer self-center">
            <div className="absolute w-4 aspect-square"></div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="h-full self-center pt-1 flex-grow border-none text-sm text-neutral bg-secondary outline-none placeholder:font-normal placeholder:text-neutral"
        />
      </div>
      <button className="add-btn aspect-square w-6 cursor-pointer"></button>
    </>
  );
};

export default NewTodo;

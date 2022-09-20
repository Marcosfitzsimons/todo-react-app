import React from "react";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import TodoNav from "./TodoNav";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import { FaRegSadTear } from "react-icons/fa";

const MainContent = ({
  todoData,
  handleIsCheck,
  clearCompleted,
  itemsActives,
  showItemsActives,
}) => {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <main className="relative bottom-24 container mx-auto max-w-4xl px-3">
      <section className="h-14 bg-secondary flex justify-between px-3 items-center rounded-xl text-neutral">
        <NewTodo />
      </section>

      <section className="todo-list-container">
        <ul className="todo-list p-0 mt-7" ref={parentRef}>
          {todoData.map((todoItem) => {
            return (
              <TodoItem
                todoItem={todoItem}
                key={todoItem.id}
                isCheck={todoItem.isCheck}
                handleIsCheck={() => handleIsCheck(todoItem.id)}
              />
            );
          })}
          {todoData.length === 0 && (
            <p className="flex flex-col items-center justify-center gap-6 text-3xl my-10 pt-8 text-neutral">
              <FaRegSadTear className="text-8xl" />
              You don't have anything to do...
            </p>
          )}
        </ul>
      </section>

      <div className="todo-list-bottom lg:grid lg:grid-cols-3 lg:grid-row-[3rem]">
        <div className="lg:col-start-1 lg:col-end-4 text-neutral rounded-b-lg h-14 bg-secondary flex px-3 justify-between text-sm items-center">
          <p className="items-left">{itemsActives.length} items left</p>
          <p
            className="clear cursor-pointer hover:text-accent"
            onClick={clearCompleted}
          >
            Clear Completed
          </p>
        </div>
        <TodoNav />
      </div>
    </main>
  );
};

export default MainContent;

import React from "react";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import TodoNav from "./TodoNav";

const MainContent = () => {
  return (
    <main className="relative bottom-24 container mx-auto max-w-4xl px-3">
      <section className="h-14 bg-secondary flex justify-between px-3 items-center rounded-xl text-neutral">
        <NewTodo />
      </section>

      <section className="todo-list-container">
        <ul className="todo-list p-0 mt-7">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </section>

      <div className="todo-list-bottom lg:grid lg:grid-cols-3 lg:grid-row-[3rem]">
        <div className="lg:col-start-1 lg:col-end-4 text-neutral rounded-b-lg h-14 bg-secondary flex px-3 justify-between text-sm items-center">
          <p className="items-left">5 items left</p>
          <p className="clear cursor-pointer hover:text-accent">
            Clear Completed
          </p>
        </div>
        <TodoNav />
      </div>
    </main>
  );
};

export default MainContent;

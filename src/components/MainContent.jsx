import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import TodoNav from "./TodoNav";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import { FaRegSadTear } from "react-icons/fa";

const MainContent = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <main className="relative bottom-24 container mx-auto max-w-4xl px-3">
      <section className="h-14 bg-secondary flex justify-between px-3 items-center rounded-xl text-neutral">
        <NewTodo
          setInputTodo={setInputTodo}
          inputTodo={inputTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </section>

      <section className="todo-list-container">
        <ul className="todo-list p-0 mt-7" ref={parentRef}>
          {todos && todos.length > 0 ? (
            todos.map((todoItem) => {
              return (
                <TodoItem
                  todoItem={todoItem}
                  key={todoItem.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              );
            })
          ) : (
            <p className="flex flex-col items-center justify-center gap-6 text-3xl my-10 pt-8 text-neutral">
              <FaRegSadTear className="text-8xl" />
              You don't have anything to do...
            </p>
          )}
        </ul>
      </section>

      <div className="todo-list-bottom lg:grid lg:grid-cols-3 lg:grid-row-[3rem]">
        <div className="lg:col-start-1 lg:col-end-4 text-neutral rounded-b-lg h-14 bg-secondary flex px-3 justify-between text-sm items-center">
          <p className="items-left">3 items left</p>
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

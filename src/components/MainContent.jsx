import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import TodoNav from "./TodoNav";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import { FaRegSadTear } from "react-icons/fa";

const MainContent = () => {
  // States
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const parentRef = useRef(null);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Save to LocalStorage

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // Auto animate
  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <main className="relative bottom-24 container mx-auto max-w-3xl px-3">
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
          {filteredTodos && filteredTodos.length > 0 ? (
            filteredTodos.map((todoItem) => {
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
            <p className="flex flex-col items-center justify-center gap-6 text-xl lg:text-3xl my-16 pt-8 text-neutral text-center">
              <FaRegSadTear className="text-6xl lg:text-8xl" />
              You don't have anything to do...
            </p>
          )}
        </ul>
      </section>

      <div className="todo-list-bottom lg:grid lg:grid-cols-3 lg:grid-row-[3rem]">
        <div className="lg:col-start-1 lg:col-end-4 text-neutral rounded-b-lg h-14 bg-secondary flex px-3 justify-between text-sm items-center">
          <p className="items-left">{filteredTodos.length} items left</p>
          <p
            className="clear cursor-pointer hover:text-accent"
            onClick={clearCompleted}
          >
            Clear Completed
          </p>
        </div>
        <TodoNav setStatus={setStatus} status={status} />
      </div>
    </main>
  );
};

export default MainContent;

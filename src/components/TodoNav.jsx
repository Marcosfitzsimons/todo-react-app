import React from "react";

const TodoNav = () => {
  return (
    <nav className="second-part text-neutral rounded-lg my-4 h-14 bg-secondary flex px-3 justify-center gap-3 lg:gap-5 text-sm items-center font-bold shadow-lg shadow-primary/30 lg:margin-0 lg:col-start-2 lg:col-end-3 lg:relative lg:bottom-[4.5rem] lg:z-[90] lg:shadow-none lg:bg-transparent">
      <p className="task-status active cursor-pointer">All</p>
      <p className="task-status cursor-pointer">Active</p>
      <p className="task-status cursor-pointer">Completed</p>
    </nav>
  );
};

export default TodoNav;

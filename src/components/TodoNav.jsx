import React from "react";

const TodoNav = ({ setStatus, status }) => {
  const handleStatus = (e) => {
    setStatus(e.target.textContent);
  };

  return (
    <nav className="second-part text-neutral rounded-lg my-4 h-14 bg-secondary flex px-3 justify-center gap-3 lg:gap-5 text-sm items-center font-bold shadow-lg shadow-primary/30 lg:margin-0 lg:col-start-2 lg:col-end-3 lg:relative lg:bottom-[4.5rem] lg:z-[90] lg:shadow-none lg:bg-transparent">
      <p
        className={
          status === "All"
            ? "task-status text-accent cursor-pointer"
            : "task-status active cursor-pointer"
        }
        onClick={handleStatus}
      >
        All
      </p>
      <p
        className={
          status === "Active"
            ? "task-status text-accent cursor-pointer"
            : "task-status active cursor-pointer"
        }
        onClick={handleStatus}
      >
        Active
      </p>
      <p
        className={
          status === "Completed"
            ? "task-status text-accent cursor-pointer"
            : "task-status active cursor-pointer"
        }
        onClick={handleStatus}
      >
        Completed
      </p>
    </nav>
  );
};

export default TodoNav;

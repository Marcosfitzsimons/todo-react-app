import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Header = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <header className="header h-56">
      <div className="container max-w-4xl mx-auto p-3 h-28 flex justify-between items-center">
        <h1 className="tracking-widest text-4xl text-white/95 cursor-pointer">
          TODO
        </h1>
        <button
          data-toggle-theme="dark,default"
          data-act-class="ACTIVECLASS"
          className="switch-container aspect-square h-6 cursor-pointer"
        ></button>
      </div>
    </header>
  );
};

export default Header;

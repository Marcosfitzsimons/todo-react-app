import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Header = ({ isMoon, handleMoon, bgImg, handleBgImg }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <header className={bgImg ? "header h-56" : "header h-56 active"}>
      <div className="container max-w-3xl mx-auto p-3 h-28 flex justify-between items-center">
        <h1 className="tracking-widest text-4xl text-white/95 cursor-pointer font-bold relative top-[.1rem]">
          TODO
        </h1>
        {isMoon ? (
          <button
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
            className="switch-container aspect-square h-6 cursor-pointer"
            onClick={() => {
              handleMoon();
              handleBgImg();
            }}
          ></button>
        ) : (
          <button
            data-set-theme="default"
            data-act-class="ACTIVECLASS"
            className="switch-container active aspect-square h-6 cursor-pointer"
            onClick={() => {
              handleMoon();
              handleBgImg();
            }}
          ></button>
        )}
      </div>
    </header>
  );
};

export default Header;

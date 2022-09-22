import React from "react";

const Footer = () => {
  return (
    <footer className="footer relative bottom-24 lg:bottom-36">
      <div className="container mx-auto max-w-4xl flex px-3 text-neutral flex-col items-center">
        <div className="attribution-container text-center lg:text-base mt-5">
          <p className="">
            Challenge by{" "}
            <a
              className="me"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Frontend Mentor.
            </a>
          </p>
          <p>
            Coded by
            <a
              href="https://github.com/Marcosfitzsimons"
              target="_blank"
              rel="noreferrer"
              className="me text-accent/90 italic"
            >
              {" "}
              Marcos Valentín Fitzsimons.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

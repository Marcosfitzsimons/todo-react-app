import React from "react";

const Footer = () => {
  return (
    <footer className="footer relative bottom-24 lg:bottom-36">
      <div className="container mx-auto max-w-4xl flex px-3 text-neutral flex-col items-center">
        <p className="footer__text">Drag and drop to reorder list</p>
        <div className="attribution-container text-center">
          <p className="attribution flex gap-1">
            Challenge by
            <a
              className="me"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor.
            </a>
            Coded by
            <a
              href="https://github.com/Marcosfitzsimons"
              target="_blank"
              rel="noreferrer"
              className="me text-accent/90 italic"
            >
              Marcos Valentín Fitzsimons.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

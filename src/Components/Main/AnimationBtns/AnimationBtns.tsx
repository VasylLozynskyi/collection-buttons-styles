import { useState } from "react";
import "./animationbtns.scss";

export const AnimationBtns = () => {
  const [addLoading, setAddLoading] = useState("");
  const clickHandler = () => {
    setAddLoading("loading");
    setTimeout(() => {
      setAddLoading("");
    }, 3000);
  };
  return (
    <>
      <section id="animation" className="btn-block">
        <h2>ANIMATION BUTTONS</h2>
        <button className="button-rotate">Click me</button>

        <button
          className={`button-sendmessage ${addLoading}`}
          onClick={clickHandler}
        >
          <i>&#10148;</i>
          <span className="text">Send Message</span>
          <span className="loading-animate"></span>
        </button>

        <button
          className="button-round"
          // in style we need to throw name btn
          style={{ ["--namebutton" as string]: '"Click me"' }}
        ></button>

        <button
          className="button-two-border"
          // in style throw color of effects and name btn
          style={{ ["--color" as string]: "red" }}
        >
          <span>Button</span>
          <i></i>
        </button>

        <button className="button-lines">Click me</button>

        <button className="button-ride"><i></i><span>Click me</span></button>

        <button className="button-finger">Click me👆</button>
      </section>
    </>
  );
};

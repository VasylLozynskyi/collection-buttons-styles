import "./glowbtns.scss";

export const GlowBtns = () => {
  return (
    <>
      <section id="glow" className="btn-block">
        <h2>GLOW BUTTONS</h2>
        <a href="javascript:void(0)" className="button glow">
          click me
        </a>
        <a href="javascript:void(0)" className="button glow button-primary">
          press me
        </a>
        <a href="javascript:void(0)" className="button glow button-action">
          press me
        </a>
        <a href="javascript:void(0)" className="button glow button-highlight">
          press me
        </a>
        <a href="javascript:void(0)" className="button glow button-caution">
          press me
        </a>
        <a href="javascript:void(0)" className="button glow button-royal">
          press me
        </a>
      </section>
    </>
  );
};

import "./borderbtns.scss";

export const BorderBtns = () => {
  return (
    <>
      <section id="border" className="btn-block">
        <h2>BORDER BUTTONS</h2>
        <a href="javascript:void(0)" className="button button-border">
          click me
        </a>
        <a href="javascript:void(0)" className="button button-border-primary button-rounded">
          click me
        </a>
        <a href="javascript:void(0)" className="button button-border-action button-pill">
          click me
        </a>
        <a href="javascript:void(0)" className="button button-border-highlight button-circle">
          click me
        </a>
      </section>
    </>
  );
};

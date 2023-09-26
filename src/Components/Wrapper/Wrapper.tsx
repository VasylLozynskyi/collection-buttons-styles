import { AsideContainer } from "../Aside/AsideContainer";
import { MainContainer } from "../Main/MainContainer"
import "./wrapper.scss";

export const Wrapper = () => {
  return (
    <div className="wrapper-site">
      <div className="container-site">
        <AsideContainer />
        <MainContainer />
      </div>
    </div>
  );
};


import { ThreeDBtns } from "./3DBtns/ThreeDBtns"
import { AnimationBtns } from "./AnimationBtns/AnimationBtns"
import { BorderBtns } from "./BorderBtns/BorderBtns"
import { FlatBtns } from "./FlatBtns/FlatBtns"
import { GlowBtns } from "./GlowBtns/GlowBtns"
import { RoundedBtns } from "./RoundedBtns/RoundedBtns"
import "./maincontainer.scss"

export const MainContainer = () => {
  return (
    <div className="main-container">
      <h1>Collection of buttons</h1>
      <FlatBtns />
      <GlowBtns />
      <RoundedBtns />
      <ThreeDBtns />
      <BorderBtns />
      <AnimationBtns />
    </div>
  )
}
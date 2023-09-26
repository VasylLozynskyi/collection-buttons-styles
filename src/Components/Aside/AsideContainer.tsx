import { IBtn, btnsData } from "../../btnsData/btnsData"
import "./asidecontainer.scss"

export const AsideContainer = () => {
  return (
    <div className="aside-container">
      <h1>MENU</h1>
      {btnsData.map((el: IBtn) => <div key={el.id}><a href={el.href}>{el.name}</a></div>)}
    </div>
  )
}
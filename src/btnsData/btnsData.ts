export interface IBtn {
  id:number,
  name:string,
  href: string
}

export const btnsData: IBtn[] = [
  {id: 1, name: "Flat", href: "#flat"},
  {id: 2, name: "Glow", href: "#glow"},
  {id: 3, name: "Rounded", href: "#rounded"},
  {id: 4, name: "3D", href: "#d3d"},
  {id: 5, name: "Border", href: "#border"},
  {id: 6, name: "Animation", href: "#animation"}
]
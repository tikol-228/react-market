import { ReactNode } from "react"

interface ILink {
    href:string,
    children:ReactNode,
    onClick?:() => void
    className?:string
}

const Link = ({onClick, children, href, className}:ILink) => {
  return (
    <>
        <a href={href} className={className} onClick={onClick}>{children}</a>
    </>
  )
}

export default Link
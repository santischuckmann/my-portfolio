import React from "react";
import { FaGithub } from '../../node_modules/react-icons/fa'

const Navbar = () => {
  return (
    <>
    <header>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <a href=""><FaGithub /></a>
    </header>
    <style jsx>
      {`
      header {
        display: flex;
        flex-direction: row;
        font-size: 2rem;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        padding: 1rem;
        width: 100vw;
      }
      `}
    </style>
    </>
    

  )
}

export default Navbar
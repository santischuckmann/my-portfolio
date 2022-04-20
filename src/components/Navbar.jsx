import React from "react";
import { FaGithub } from '../../node_modules/react-icons/fa'
import { FaLinkedin } from "../../node_modules/react-icons/fa";
import { FaLaptopCode } from "../../node_modules/react-icons/fa";


const Navbar = () => {
  return (
    <>
    <header>
        <a href="https://github.com/santischuckmann" target="_blank" rel= "noreferrer"><FaGithub /></a>
        <a href = "https://www.linkedin.com/in/santiago-schuckmann-33183620a"  target="_blank" rel= "noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/santischuckmann/my-portfolio" target="_blank" rel= "noreferrer"><FaLaptopCode /></a>
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
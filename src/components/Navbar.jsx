import React from 'react'
import useHover from './utils/useHover'
import { FaGithub } from '../../node_modules/react-icons/fa'

function Navbar() {
  const [hoverRef, isHovered] = useHover ()
  return (
    <header>
      <h2>{isHovered ? "Sure entering there 🧐" : "Portfolio"}</h2>
      <div ref={hoverRef}>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a className = "icon" target="_blank" rel='noreferrer' href="https://github.com/santischuckmann"><FaGithub /></a>
      </div>
      <style jsx>
        {`
        header {
          width: 100vw;
          background-color: black;
          color: #ddd;
          display: flex;
          flex-direction: row;
          min-height: 5.5rem;
          align-items: center;
          z-index: 1;
        }
        h2 {
          font-size: 1.8rem;    
          width: 50%;
          flex: 1;
          margin: 0 0 0 1rem;
        }
        div {
          width: 60%;
          font-size: 1.4rem;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin: 0 1rem 0 1rem;
          align-items: center;
        } 

        .icon {
          font-size: 2.5rem;
          margin: 0;
          padding: 0;
        }

        a:hover {
          color: #fff;
        }

        @media screen and (min-width: 768px) {
          h2 {
            font-size: 2rem;
          }
          div {
            font-size: 1.6rem;
          }
        }

        @media screen and (min-width: 1200px) {
          h2 {
            font-size: 2.2rem;
            width: 70vw;
          }
          div {
            font-size: 1.8rem;
          }
        }

        `}
        </style>
    </header>
  )
}

export default Navbar
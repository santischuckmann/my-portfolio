import React from 'react'
import { BsFillArrowDownCircleFill,BsFillArrowRightCircleFill  } from '../../node_modules/react-icons/bs'
import Cards from './Cards'
import TechSection from './TechSection'

const Body = () => {
  return (
    <>
    <div className='container'>
    <main>
      <div className = "titlePlusIcon">
      <h1>Santiago Schuckmann</h1>
      <BsFillArrowRightCircleFill className = "arrowRight"/>
      </div>
      <p>A 19 year-old front end developer passionate about this things and those other things. Take my hand and join me in this adventure.</p>
      <BsFillArrowDownCircleFill className = "arrowDown"/>
    </main>
    <section className='me'>
      <h3>What about me?</h3>
      <p> Summing it up, I am a computer science student aiming to be a web developer by learning and practicing as a self-taught programmer. I live in Buenos Aires, Argentina. I speak fluent English. </p> 
    </section>
    <TechSection className = "tech"/>
    <div className='projects'></div>
      <h2>✨ These are my projects ✨</h2>
    <Cards className="cards" />
    </div>
    <style jsx>
      {`
      .container {
        color: var(--font-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        text-align: center;
        justify-content: center;
        font-size: 1.8rem;
        gap: 1rem;
      }
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .arrowRight {
        display: none;
      }
      .me {
        width: 90%;
      }
      h1 {
        font-size: 2.5rem;
        font-weigth: 200;
        margin: 0;
      }
      h2 {
        font-size: 2.2rem;
      }

      @media screen and (min-width: 1000px) {
        main {
          flex-direction: row;
          width: 90vw;
          justify-content: space-between;
          height: 25vh;
        }

        .titlePlusIcon {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 30%;
        }

        .titlePlusIcon h1{
          font-size: 3rem;
        }

        main p {
          width: 60%;
          font-size: 2.5rem;
        }
        .arrowDown {
          display: none;
        }

        .arrowRight {
          display: inline;
          font-size: 2rem;
        }

        .me h3 {
          font-size: 2.5rem;
        }

        .me p {
          font-size: 2.2rem;
        }
      }
      `}
    </style>
    </>
  )
}

export default Body
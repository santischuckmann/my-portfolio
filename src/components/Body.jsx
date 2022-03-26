import React from 'react'
import { BsFillArrowDownCircleFill } from '../../node_modules/react-icons/bs'
import Cards from './Cards'

const Body = () => {
  return (
    <>
    <div className='container'>
    <main>
      <h1>Santiago Schuckmann</h1>
      <p>A 19 year-old front end developer passionate about this things and those other things. Take my hand and join me in this adventure.</p>
      <BsFillArrowDownCircleFill />
    </main>
    <section className='me'>
      <h3>What about me?</h3>
      <p> Summing it up, I am a computer science student aiming to be a web developer by learning and practicing as a self-taught programmer. I live in Buenos Aires, Argentina. I speak fluent English. </p> 
    </section>
    <h2>✨ These are my projects ✨</h2>
    <Cards />
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
        width: 80%;
        margin-top: 1rem;
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
      `}
    </style>
    </>
  )
}

export default Body
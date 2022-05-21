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
      <p className='presentation'>A 19 year-old front end developer passionate about the evolution of the tech industry and facing challenges which ultimately leads to solutions.</p>
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
    </>
  )
}

export default Body
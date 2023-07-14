import React from 'react'
import { BsFillArrowDownCircleFill,BsFillArrowRightCircleFill  } from '../../node_modules/react-icons/bs'
import Cards from './Cards'
import TechSection from './TechSection'

const achievements = [
  'Quickly adapted to a .NET Core codebase from a Node.js background.',
  'Migrated two landing pages to Next.js succesfull.y, without losing SEO score.',
  'Been transfered to a crucial project for my company with only 4 months of .NET experience.',
  'Learnt library code while maintaing a UI Library.',
  'Improved type-safety in TypeScript while using complex generics.',
  'Worked alongside computer science majors while having 6 months of experience.',
]


const Body = () => {
  return (
    <>
    <div className='container'>
        <main>
          <div className = "titlePlusIcon">
          <h1>Santiago Schuckmann</h1>
          <BsFillArrowRightCircleFill className = "arrowRight"/>
          </div>
          <p className='presentation'>A 20 year-old software developer passionate about the evolution of the tech industry and facing challenges which ultimately leads to solutions.</p>
          <BsFillArrowDownCircleFill className = "arrowDown"/>
        </main>
        <section className='me'>
          <h3>What about me?</h3>
          <p> Summing it up, I am a computer science student currently working as a Full Stack Developer in <b>Cedeira Software Factory</b>. I live in Buenos Aires, Argentina. I speak fluent English. </p> 
        </section>
        <TechSection className = "tech"/>
        <section className='me'>
          <h3>✨ My achievements ✨</h3>
          <ul style={{ marginBottom: 48 }}>
            {achievements.map(( achievement, index) => (
              <li key={`${index}.${achievement}`}>{achievement}</li>
            ))}
          </ul>
          <p> Summing it up, I am a computer science student currently working as a Full Stack Developer in <b>Cedeira Software Factory</b>. I live in Buenos Aires, Argentina. I speak fluent English. </p> 
        </section>
        <div className='projects'></div>
          <h2>✨ These are my projects ✨</h2>
        <Cards className="cards" />
        <h3 style={{ marginTop: 24 }}>✨ My resume ✨ </h3>
        <iframe style={{ height: '100vh', width: '100vw' }} src="https://drive.google.com/file/d/1UFShaMO3e_8Qj4N9WQTirPE9IvHpxhCA/preview?usp=embed_googleplus" allowfullscreen title='My resume'></iframe>
      </div>
    </>
  )
}

export default Body
import React from 'react'

const TechSection = () => {
  return (
    <>
    <section className='meTech'>
      <h3>Do I know anything?</h3>
      <p className='doI'> Actually, I would say otherwise. My greatest virtue is that i am not able to grasp on the idea of being "totally" skillful at something. Luckily, this haven´t stopped me from building and working on projects, despite knowing I can always learn something new. Being totally honest...</p> 
      <div className = "techStack">
      <h4 className='canDeliver'>I can deliver in this skills </h4> 
      <ul className='techCanDeliver'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript(ES6)</li>
        <li>React.js</li>
      </ul>
      <h4 className='learning'>I am learning these skills. Hope seeing these up there 😋</h4>
      <ul className='techLearning'>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
      </div>
      <span className = "span">Is not so difficult to see that what I want, what I need is... to become a <b>Full Stack Developer</b> in JavaScript.</span>
    </section>
    <style jsx>
      {`
      .meTech {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }
      
      .doI {
        width: 95%
      }
      h3 {
        margin: 0;
      }
      
      .span {
        font-size: 2rem;
      }
      
      @media screen and (min-width: 1000px) {
        .meTech h3 {
          font-size: 2.5rem;
        }

        .meTech p {
          font-size: 2.2rem
        }

        .techStack {
          display: grid;
          grid-template-rows: 80px 200px;
          grid-template-columns: 1fr 1fr;
          width: 80vw;      
          grid-gap: 0;
          font-size: 2.2rem;
        }

        .canDeliver {
          grid-row: 1;
          grid-column: 1;
        }
        }

        .techCanDeliver {
          grid-row: 1 / 3;
          grid-column: 1;
        }

        .learning {
          grid-row: 1;
          grid-column: 2 / 3;
        }

        .techLearning {
          grid-row: 1 / 3;
          grid-column: 2 / 3;
        }

      }
     `}
    </style>
    </>
  )
}

export default TechSection;
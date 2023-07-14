import React from 'react'

const deliverableTechnologies = [
  'Node.js',
  '.NET Core',
  'Microsoft SQL Server',
  'React.js',
  'GraphQL',
  'TypeScript',
  'REST APIs',
]

const almostDeliverableTechnologies = [
  'Microservices',
  'OpenShift',
  'Jenkins',
]

const TechSection = () => {
  return (
    <>
    <section className='meTech'>
      <h3>Do I know anything?</h3>
      <p className='doI'> I have worked with brilliant people in different teams and work enviroments. I have extended an UI library, while I also worked refactoring tons of backend code</p> 
      <p className='doI'> I consider myself a software developer, because I have read and learnt so much about the foundations of this profession that I can work well anywhere in the spectrum of web development.</p> 
      <p className='doI'> If you ask me, the skill that I am trying to master is microservices, especially in APIs written in .NET Core. I could also build the UI if the frontend dev is on vacation ;)</p> 
      <div className = "techStack">
      <h4 className='canDeliver'>I can deliver in this skills </h4> 
      <ul className='techCanDeliver'>
        {deliverableTechnologies.map((tech, index) => (
          <li key={`${index}.${tech}`}>{tech}</li>
        ))}
      </ul>
      <h4 className='learning'>I am learning these skills. Hope seeing these up there 😁</h4>
      <ul className='techLearning'>
        {almostDeliverableTechnologies.map((tech, index) => (
            <li key={`${index}.${tech}`}>{tech}</li>
          ))}
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
      
      .meTech .doI {
        width: 95%
      }
      .meTech h3 {
        margin: 0;
      }
      
      .meTech.span {
        font-size: 2rem;
      }
      
      @media screen and (min-width: 1000px) {
        .meTech h3 {
          font-size: 2.5rem;
        }

        .meTech p {
          font-size: 2.2rem
        }

        .meTech .techStack {
          display: grid;
          grid-template-rows: 80px 250px;
          grid-template-columns: 1fr 1fr;
          width: 80vw;      
          grid-gap: 0;
          font-size: 2.2rem;
        }

        .meTech .canDeliver {
          grid-row: 1;
          grid-column: 1;
        }
        }

        .meTech .techCanDeliver {
          grid-row: 1 / 3;
          grid-column: 1;
        }

        .meTech .learning {
          grid-row: 1;
          grid-column: 2 / 3;
        }

        .meTech .techLearning {
          align-self: flex-start
          grid-row: 2 / 3;
          grid-column: 2 / 3;
        }

      }
     `}
    </style>
    </>
  )
}

export default TechSection;
import React from 'react'

const TechSection = () => {
  return (
    <>
    <section className='me'>
      <h3>Do I know anything?</h3>
      <p> Actually, I would say otherwise. My greatest virtue is that i am not able to grasp on the idea of being "totally" skillful at something. Luckily, this haven´t stopped me from building and working on projects, despite knowing I can always learn something new. Being totally honest...</p> 
      <h4>I can deliver in this skills </h4> 
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript(ES6)</li>
        <li>React.js</li>
      </ul>
      <h4>I am learning these skills. Hope seeing these up there 😋</h4>
      <ul>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
      <span className = "span">Is not so difficult to see that what I want, what I need is a... to become a <b>Full Stack Developer</b> in JavaScript.</span>
    </section>
    <style jsx>
      {`
      .me {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }

      h3 {
        margin: 0;
      }
      
      .span {
        font-size: 2rem;
      }
     `}
    </style>
    </>
  )
}

export default TechSection;
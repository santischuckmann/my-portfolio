import React from 'react';


function Body() {
  return (
    <>
    <h3>¿What about me?</h3>
    <div>
      <p> Summing it up, I am a computer science student aiming to be a web developer by learning and practicing as a self-taught programmer. I live in Buenos Aires, Argentina. I speak fluent English. </p> 
    </div>
    <style jsx global>
      {`
      p {
        font-size: 1.5rem;
        margin: 1rem;
        margin-left: 1rem;
        color: #ccc;
        width: 30rem;
      }
      h3 {
        margin: 1rem 0 0 1rem;
        font-size: 2.2rem;
        color: #aaa;
      }`
      }
      </style>
      <style jsx>
        {`
        p {
          width: 100%;
        }
        @media screen and (min-width: 768px) {
          h3 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1.8rem;
          }
        }

        `}
      </style>
    </>
  )
}

export default Body
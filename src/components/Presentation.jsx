import React from 'react'

function Presentation() {
  return (
    <article>
        <button>
          Learn more about me
        </button>
        <h1>I am Santiago Schuckmann. A 19 year-old front end developer passionate about this things and those other things. Take my hand and join me in this adventure.</h1>
      <style jsx>
        {` 
        article{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 50rem;
          background-image: 
          url('/background.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
        }

        button {
          background: transparent;
          border: .6px solid #fff;
          color: #eee;
          font-size: 1.6rem;
          max-width: content;
          font-weigth: 400
        }

        h1 {
          color: #bbb;
          font-size: 1.8rem;
          display: flex;
          padding: 2rem;
          text-align: center;
          text-shadow: 1px 1px #000;
        }

        @media screen and (min-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          button {
            font-size: 1.8rem;
          }
        }

        @media screen and (min-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          button {
            font-size: 1.8rem;
          }
        }

        @media screen and (min-width: 1200px) {
          h1 {
            font-size: 2.2rem;
            width: 80vw;
          }

        }

        @media screen and (min-width: 1500px) {
          h1 {
            font-size: 2.5rem;
            width: 70vw;
          }
          button {
            font-size: 2rem;
          }
        }
        `}
        </style>
      </article>
  )
}

export default Presentation
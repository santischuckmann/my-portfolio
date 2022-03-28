import React from 'react'

const Card = ({title, image, stack, sourceCode, liveView}) => {
  return (
    <div className='card'>
      <h4>{title}</h4>
      <img src = {process.env.PUBLIC_URL + image} alt= ""/>
      <ul>
        {stack.map((each) => {
          return (
            <li key = {each.id}>{each.tec}</li>
          )
        })}
      </ul>
      <div className='button'>
      <button href = {sourceCode}>Source code</button>
      <button href = {liveView}>Live view</button>
    </div>
    <style jsx>
      {`
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 80vw;
        heigth: 50rem;
      }      
      img {
        height: 20rem;
        width: 20rem;
      }
      h4 {
        margin: 0;
      }
      .button {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 3rem;
      }

      button {
        border: none;
        background-color: var(--main-color);
        color: var(--font-color);
        border-radius: 10%;
        font-size: 1.5rem;
        padding: 0.8rem;
        font-weight: 500;
        outline: 0.5px solid var(--font-color);
      }
      `
      }
    </style>
    </div>
  )
}

export default Card
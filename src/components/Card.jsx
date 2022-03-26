import React from 'react';
import { useState } from 'react';

const Card = ({title, image, stack, sourceCode, liveView, explanation}) => {
  const [show, setShow] = useState(false)
  return (
    <>
    <div className='contenedor'>
      <h4>{title}</h4>
      <img className = "img" src= {image} alt= ""/>
      <ul>
        {stack.map((each) => {
          return (
            <li key = {each.id}>{each}</li>
          )
        })}
      </ul>
      <div className='botones'>
      <button onClick={() => setShow(!show)}>Under the hood process</button>
      <button href = {sourceCode}>Source code</button>
      <button href = {liveView}>Live view</button>
      </div>
      {show && <p>{explanation}</p>}
    </div>
    <style jsx>
      {`.contenedor {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px dashed #292979;
        border-radius: 10px;
        color: #bbb;
        margin: 1rem;
        width: 35rem;
        min-height: 50rem;
        max-height: 70rem;
      
      }
      h4 {
        font-size: 2rem;
        flex: 1;
        margin: 1rem 2rem;
        text-align: center;
      }
      ul {
        list-decoration: none;
        font-size: 1.8rem;
        font-weight: 600;
        padding: 0;
        margin: 1rem 0 1rem 0;
        text-align: center;
      }
      ul li {
        list-style: none;
        
      }
      .botones {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 2rem 1rem;
        gap: 1rem;
      }
      button {
        background: transparent;
        border: .6px solid #fff;
        color: #eee;
        font-size: 1.4rem;
        max-width: content;
        font-weigth: 400;
        padding: 0.5rem;
      }
      `}
      </style>
    </>
  )
}

export default Card
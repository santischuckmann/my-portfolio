import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <h5>Designed &amp; built by Santiago Schuckmann</h5>
        <span>(Still in progress)</span>
        <span>For business inquiries <a href='mailto:schuckmannsantaigo@gmail.com'>@schuckmannsantiago@gmail.com</a></span>
      </footer>
      <style jsx>
        {`
        footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%; 
          background: var(--secondary-color);
          font-size: 1.5rem;
          heigth: 20vh;
          padding: 1rem;
          color: var(--main-color);
        }
        span {
          width: 70%;
          font-size: 1.2rem;
          text-align: center;
          margin: 0 0 1rem 0;
        }
        
        `}</style>
    </>
  )
}

export default Footer
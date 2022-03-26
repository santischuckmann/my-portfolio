import { projects } from './projects'
import Card from './Card'

const Cards = () => {
  return (
    <>
    <div>
    {projects.map((project) => {
      return (
        <Card key = {project.id} {...project}></Card>
      )
    })}
    </div>
    <style jsx>
      {`div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      @media screen and (min-width: 768px) {
        div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        }
      }`}
      </style>
    </>
  )
}

export default Cards;


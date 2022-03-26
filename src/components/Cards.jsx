import { projects } from './utils/projects'
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
    <style jsx>
      {`div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }
      
      @media screen and (min-width: 768px) {
        div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        }
      }`}
      </style>
    </div>
    </>
  )
}

export default Cards
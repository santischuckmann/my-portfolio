import { projects } from './utils/projects'
import Card from './Card'

const Cards = () => {
  return (
    <>
    <div className = "cards">
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
        gap: 2rem;
      }`}
      </style>
    
    </>
  )
}

export default Cards
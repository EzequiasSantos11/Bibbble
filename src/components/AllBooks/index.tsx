import { Container } from "./styles";
import { DataProps } from "../../utils";


export function AllBooks({
  id, 
  title,
  author, 
  description, 
  genre, 
  image,
  published
}: DataProps){
  const date = new Date(published).toLocaleDateString("pt-br",{year: "numeric", month: "short", day: "2-digit"}).replace(/de/gi, "");
  return(
    <Container key={id}>
      <img src={image} alt="" />
      <div className="textBook">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{description.length > 70 ? `${description.substring(0, 70)}...`: description}</p>
        <div className="details">
          <button>{genre}</button>
          <span>{date}</span>
        </div>
      </div>
    </Container>
  )
}
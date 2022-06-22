import { useEffect, useState } from "react";
import { AllBooks } from "../../components/AllBooks";
import { Footer } from "../../components/Footer";
import { api } from "../../Services";
import { Container } from "../../Styles/HomeStyles";
import { DataProps } from "../../utils";

export default function Home(){
  const [data, setData] = useState<DataProps[]>([]);
  useEffect(()=>{
    function fetch(){
      api.get("/").then((res)=>{
        // console.log(res.data);
        const data = res.data.data;
        setData(data);
      }).catch((error)=>{
        console.log("Algo deu errado", error);
      });
    }
    setTimeout(fetch, 2000);
  },[]);
  return(
    <Container>
      <div className="wrapper">
        {
          data.length === 0 ?(
            <div className="loading">
              <h1>Carregando...</h1>
            </div>
          ):(
            data.map((book)=>(
              <AllBooks
                id={book.id}
                author={book.author}
                description={book.description}
                genre={book.genre}
                image={book.image}
                published={book.published}
                title={book.title}
              />
            )
          )
        )}
      </div>
      <Footer/>
    </Container>
  )
}
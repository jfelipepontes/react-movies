import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";


function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      //Runs only on the first render
      async function loadFilmes() {

        await api.get(`/movie/${id}`, {
          params: {
            api_key: "0ad6b8edc921be571526e448398c3ef5",
            language: "pt-BR",
          }
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Filme nao encontrado: ", err);
        });
        
      }

      loadFilmes();

      return () => {
        console.log("Componente desmontado");
      }

    }, []);

    if (loading) {
      return (
        <div className="filme-info">
          <h1>Carregando filme...</h1>
        </div>
      )
    }

    return (
      <div className="filme-info">
        <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />
        
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>

        <strong>Nota: {filme.vote_average}</strong>
      
      </div>
    );
      
  }
  
  export default Filme;
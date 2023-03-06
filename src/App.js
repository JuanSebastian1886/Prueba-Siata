import './App.css';
import  { useState } from "react";

function App() {
  const[valor,setValor]=useState("");
  const[resultados,setResultados]=useState([]);

  const buscarResultados= async()=>{
    const API_KEY = 'ylatEuBgD3GYFIXicLEXqTvefqJXbX8vxCeHSS1MUiY';
    const URL=`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=40`;

    const response= await fetch(URL);
    const data= await response.json();
    setResultados(data.results)
    console.log(data);
  }
  return (
    <div className="App">
      <div className="Search_Box">
        <input className="Search_Box--input" placeholder="Buscar imagenes" onChange={e=>setValor(e.target.value)}/>
        <button onClick={()=>buscarResultados()} className="Search_Box--btn">Buscar</button>
      </div>
      <div className="main_content">
        <div className='main_content_grid'>
        {
          resultados.map((elemento, indice)=>{
            return(
              <img key={indice} src={elemento.urls.regular}/>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;

import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import Chute from "./Components/Chute";
import { useState } from "react";
import palavras from "./Components/palavras.js";



export default function App() {
  const [erro, setErro] = useState(0);
  const [chutar, setChutar] = useState(true); 
  const [inputChute, setInputChute] = useState(""); 
  const [palavraNaTela, setPalavraNaTela] = useState(""); 
  const [iniciarJogo, setIniciarJogo] = useState(false); 
  const [corDaPalavra, setCorDaPalavra] = useState(""); 
  const [arrayPalavra, setArrayPalavra] = useState([]); 
  const [arrayLetra, setArrayLetra] = useState([]); 
  const [statusJogo, setStatusJogo] = useState(true);
  const [imagem, setImagem] = useState("assets/forca0.png");

  
  function sorteiaPalavra() {
    return Math.floor(Math.random() * palavras.length);
  }


  let palavra = palavras[sorteiaPalavra()];
  let listaLetra = Array.from(palavra);
  let palavraEmUnderline = Array.from(palavra).map((l) => l = "_");

  
  function comecaJogo() {        
    setStatusJogo(false);    
    setArrayPalavra(listaLetra);
    setPalavraNaTela(palavraEmUnderline);
    setArrayLetra([]);
    setErro(0);
    setCorDaPalavra("black");
    setImagem("assets/forca0.png");
    setInputChute("");   
  }

  function clickLetra(letra) {
    const novoArray = [...arrayLetra, letra];
    setArrayLetra(novoArray);
    
    const palavraCriada = palavraNaTela.map((e, i) => (arrayPalavra[i] === letra) ? e = letra : e);
    if (arrayPalavra.includes(letra)) {      
      setPalavraNaTela(palavraCriada);
      if (!palavraCriada.includes("_")) {
        setCorDaPalavra("green");
        setIniciarJogo(true);
        setStatusJogo(true);
        setChutar(true);
      }
    } else {
      setErro(erro + 1);
      if (erro === 0) {
        setImagem("assets/forca1.png");
      } if (erro === 1) {
        setImagem("assets/forca2.png");
      } if (erro === 2) {
        setImagem("assets/forca3.png");
      } if (erro === 3) {
        setImagem("assets/forca4.png");
      } if (erro === 4) {
        setImagem("assets/forca5.png");
      } if (erro === 5) {
        setImagem("assets/forca6.png");
        setPalavraNaTela(arrayPalavra.join(''))
        setCorDaPalavra("red");
        setStatusJogo(true);
        setChutar(true);
        setInputChute("");
      }
    }
  }

  function chute(){
    if(arrayPalavra.join('') === inputChute){
      setPalavraNaTela(arrayPalavra.join(''))      
      setCorDaPalavra("green");
      setStatusJogo(true);   
      setInputChute("");              
    } else {
      setPalavraNaTela(arrayPalavra.join(''))
      setCorDaPalavra("red");
      setImagem("assets/forca6.png");
      setStatusJogo(true);
      setInputChute("");        
    }
    
  }
  

  return (
    <>
      <Jogo
        iniciar={comecaJogo}
        palavraNaTela={palavraNaTela}
        imagem={imagem}
        setImagem={setImagem}
        botaoIniciar={iniciarJogo}
        cor={corDaPalavra}
        erro={erro}
        palavra={palavra}
      />
      <Letras
        arrayLetra={arrayLetra}
        clickLetra={clickLetra}
        statusJogo={statusJogo}
      />
      <Chute
        inputChute={inputChute}
        setInputChute={setInputChute}
        chutar={chutar}
        setChutar={setChutar} 
        statusJogo={statusJogo} 
        chute={chute}
      />
    </>
  );
}



import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import Chute from "./Components/Chute";
import { useState } from "react";
import palavras from "./Components/palavras.js";


export default function App() {  
  const [erro, setErro] = useState(0) 
  const [teclado, setTeclado] = useState(true); //teclado, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [chutar, setChutar] = useState(true); //botão de chutar, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [inputChute, setInputChute] = useState(true); //input onde digita o chute, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [palavraNaTela, setPalavraNaTela] = useState(""); //palavra que será colocada na tela, por meio de sorteio;
  const [iniciarJogo, setIniciarJogo] = useState(false); //botão de iniciar o jogo, inicia habilitado, e ao clicar nele, ele desabilita;
  const [imagem, setImagem] = useState("assets/forca0.png"); //imagem da forca que irá mudar (ou não) conforme os erros;
  const [corDaPalavra, setCorDaPalavra] = useState("black"); //cor que irá mudar se acertar ou errar a palavra;
  const [arrayPalavra, setArrayPalavra] = useState([]); //array onde estarão cada letra da palavra sorteada;
  const [arrayLetra, setArrayLetra] = useState([]); //array onde estarão cada letra clicada; 
  const [statusJogo, setStatusJogo] = useState(true)


  


  /// função que sorteia a palavra ///
  function sorteiaPalavra() {
    return Math.floor(Math.random() * palavras.length);
  }

  /// variáveis que guardam a palavra sorteada, a palavra em forma de array e a palavra em forma de underline ///
  let palavra = palavras[sorteiaPalavra()];
  let listaLetra = Array.from(palavra);
  let palavraEmUnderline = Array.from(palavra).map((l) => l = "_");
  


  /// função que inicia o jogo, habilitando o teclado, o input e o botão de chutar, desabilitando o de "escolher palavra", mostra a palavra na tela e inicia a contagem de erro ///
  function comecaJogo() {
    // setTeclado(false);
    setStatusJogo(false)
    setChutar(false);
    setInputChute(false);
    setIniciarJogo(true);
    setArrayPalavra(listaLetra);
    setPalavraNaTela(palavraEmUnderline);
    setArrayLetra([]);
    setErro(0)
    
    console.log(palavraEmUnderline);
    console.log(listaLetra);
  }

  function clickLetra(letra) {        
    const novoArray = [...arrayLetra, letra];        
    setArrayLetra(novoArray);        
    console.log(novoArray); 
    erros(letra);
  }
  
  function erros(letra){
    if(!listaLetra.includes(letra)){      
         
     }
  }







  return (
    <>
      <Jogo
        iniciar={comecaJogo}
        palavraNaTela={palavraNaTela}
        imagem={imagem}
        botaoIniciar={iniciarJogo}
        cor={corDaPalavra}
        erro={erro}        

      />
      <Letras
        arrayLetra={arrayLetra}  
        clickLetra={clickLetra}
        teclado={teclado}
        statusJogo={statusJogo}
      />
      <Chute
        inputChute={inputChute}
        botaoChute={chutar}
        setInputChute={setInputChute}
      />
    </>
  );
}



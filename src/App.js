import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import Chute from "./Components/Chute";
import { useState } from "react";
import palavras from "./Components/palavras.js";



export default function App() {
  const [erro, setErro] = useState(0);
  const [chutar, setChutar] = useState(true); //botão de chutar, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [inputChute, setInputChute] = useState(""); //input onde digita o chute, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [palavraNaTela, setPalavraNaTela] = useState(""); //palavra que será colocada na tela, por meio de sorteio;
  const [iniciarJogo, setIniciarJogo] = useState(false); //botão de iniciar o jogo, inicia habilitado, e ao clicar nele, ele desabilita;
  const [corDaPalavra, setCorDaPalavra] = useState(""); //cor que irá mudar se acertar ou errar a palavra;
  const [arrayPalavra, setArrayPalavra] = useState([]); //array onde estarão cada letra da palavra sorteada;
  const [arrayLetra, setArrayLetra] = useState([]); //array onde estarão cada letra clicada; 
  const [statusJogo, setStatusJogo] = useState(true);
  const [imagem, setImagem] = useState("assets/forca0.png");

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
    setStatusJogo(false);    
    setIniciarJogo(true);
    setArrayPalavra(listaLetra);
    setPalavraNaTela(palavraEmUnderline);
    setArrayLetra([]);
    setErro(0);
    setCorDaPalavra("black");
    console.log(palavraEmUnderline);
    console.log(listaLetra);
  }

  function clickLetra(letra) {
    const novoArray = [...arrayLetra, letra];
    setArrayLetra(novoArray);
    // console.log(novoArray);
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
        setInputChute(true);
      }
    }
  }

  function chute(){
    if(arrayPalavra.join('') === inputChute){
      setPalavraNaTela(arrayPalavra.join(''))      
      setCorDaPalavra("green");
      setStatusJogo(true)
      setIniciarJogo(false);      
    } else {
      setPalavraNaTela(arrayPalavra.join(''))
      setCorDaPalavra("red");
      setImagem("assets/forca6.png");
      setStatusJogo(true)
      setIniciarJogo(false);
    }
    console.log(inputChute)
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



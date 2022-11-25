import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import Chute from "./Components/Chute";
import { useState } from "react";


export default function App() {
  const [teclado, setTeclado] = useState(true); //teclado, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [chutar, setChutar] = useState(true); //botão de chutar, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [inputChute, setinputChute] = useState(true); //input onde digita o chute, que inicia desabilitado, e só habilita ao clicar em "escolher palavra";
  const [palavraNaTela, setPalavraNaTela] = useState(""); //palavra que será colocada na tela, por meio de sorteio;
  const [iniciarJogo, setIniciarJogo] = useState(false); //botão de iniciar o jogo, inicia habilitado, e ao clicar nele, ele desabilita;
  const [contaErro, setContaErro] = useState(0); //contagem de erros;
  const [imagem, setImagem] = useState("./assets/forca0.png"); //imagem da forca que irá mudar (ou não) conforme os erros;
  const [corDaPalavra, setCorDaPalavra] = useState("black"); //cor que irá mudar se acertar ou errar a palavra;

 

  return (
    <>
      <Jogo
        palavra={palavraNaTela}
        setPalavra={setPalavraNaTela}
        imagem={imagem}
        setImagem={setImagem}
        iniciar={iniciarJogo}
        setIniciar={setIniciarJogo}
        erros={contaErro}
        setErros={setContaErro}
        cor={corDaPalavra}
        setCor={setCorDaPalavra}
        setTeclado={setTeclado}
      />
      <Letras
        teclado={teclado}
        setTeclado={setTeclado}
      />
      <Chute
        inputChute={inputChute}
        setinputChute={setinputChute}
        botaoChute={chutar}
        setChute={setChutar} />
    </>
  );
}



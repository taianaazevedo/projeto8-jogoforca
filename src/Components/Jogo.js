import { useState } from "react";
import palavras from "./palavras";

export default function Jogo() {

    const palavra = Math.floor(Math.random() * palavras.length);
    const [word, setWord] = useState("");
    

    function start() {
        const resposta = palavras[palavra];
        const palavraEscolhida = resposta.split("");
        console.log(palavraEscolhida);
        for(let i = 0; i < palavraEscolhida.length; i++){
            palavraEscolhida[i] = "_  " 
        }
        setWord(palavraEscolhida);
        
    }


    return (
        <div class="initial-state">
            <div class="image-forca">
                <img src="./assets/forca0.png" />
            </div>
            <div class="button">
                <button onClick={start}>Escolher palavra</button>
                <div class="word">{word}</div>
            </div>

        </div>
    );
}
import palavras from "./palavras.js";

export default function Jogo({ palavra,
    setPalavra, imagem, setImagem,
    iniciar, setIniciar,
    erros, setErros, cor, setCor, setTeclado }) {
    


    // //função que mostra a palavra sorteada em forma de underlines
    function start() {
        const palavra = Math.floor(Math.random() * palavras.length);
        let palavraAleatoria = palavras[palavra];
        let palavraExibida = palavraAleatoria.split("");

        console.log(palavraExibida)
        for (let i = 0; i < palavraExibida.length; i++) {
            palavraExibida[i] = "_";
        }
        setPalavra(palavraExibida);
        setIniciar(true);
        setTeclado(false);

    }

    //     }
    //     const resposta = palavras[palavra]
    //     const palavraAleatoria = resposta.split("");

    //     for (let i = 0; i < palavraAleatoria.length; i++) {
    //         palavraAleatoria[i] = "_  "
    //     }
    //     setWord(palavraAleatoria);
    //     setStartGame(true);
    //     setAlphabet(false);

    // }


    return (
        <div className="estado-inicial">
            <div className="imagem-forca">
                <img src={imagem} />
            </div>
            <div className="botao">
                <button disabled={iniciar} onClick={start}>Escolher palavra</button>
                <div className="palavra-sorteada">{palavra}</div>
            </div>

        </div>
    );
}

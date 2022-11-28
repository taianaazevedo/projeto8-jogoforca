

export default function Jogo({ imagem, iniciar, palavraNaTela, botaoIniciar, cor, palavra }) {

    return (
        <div className="estado-inicial">
            <div className="imagem-forca">
                <img src={imagem} data-test="game-image" />
            </div>
            <div className="botao">
                <button
                    data-test="choose-word"
                    disabled={botaoIniciar}
                    onClick={iniciar}>
                    Escolher palavra
                </button>
                <div
                    data-test="word"
                    data-answer={palavra}
                    className="palavra-sorteada"
                    style={{ color: cor }}>
                    {palavraNaTela}
                </div>
            </div>
        </div>
    );
} 

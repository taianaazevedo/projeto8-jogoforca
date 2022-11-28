

export default function Jogo({ imagem, iniciar, palavraNaTela, botaoIniciar, cor }) {

    return (
        <div className="estado-inicial">
            <div className="imagem-forca">
                <img src={imagem} />
            </div>
            <div className="botao">
                <button disabled={botaoIniciar}
                    onClick={iniciar}>
                    Escolher palavra
                </button>
                <div className="palavra-sorteada"
                    style={{ color: cor }}>
                    {palavraNaTela}
                </div>
            </div>
        </div>
    );
} 


export default function Chute({chute, setInputChute, inputChute, statusJogo}) {

    return (
        <>
            <div className="chutar-palavra">
                <p>Já sei a palavra!</p>
                <input 
                data-test="guess-input"
                placeholder="Digite aqui seu chute"
                disabled={statusJogo}
                onChange={(e) => setInputChute(e.target.value)}
                value={inputChute}></input>
                <button 
                data-test="guess-button"
                disabled={statusJogo}
                onClick={chute}>Chutar</button>
            </div>
        </>
    );
}
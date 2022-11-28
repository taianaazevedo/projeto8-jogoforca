
export default function Chute({chute, setInputChute, inputChute, statusJogo}) {

    return (
        <>
            <div className="chutar-palavra">
                <p>Já sei a palavra!</p>
                <input 
                placeholder="Digite aqui seu chute"
                disabled={statusJogo}
                onChange={(e) => setInputChute(e.target.value)}
                value={inputChute}></input>
                <button disabled={statusJogo}
                onClick={chute}>Chutar</button>
            </div>
        </>
    );
}
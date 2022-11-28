
export default function Chute({botaoChute, inputChute}) {

    

    return (
        <>
            <div className="chutar-palavra">
                <p>Já sei a palavra!</p>
                <input disabled={inputChute}></input>
                <button disabled={botaoChute}>Chutar</button>
            </div>
        </>
    );
}
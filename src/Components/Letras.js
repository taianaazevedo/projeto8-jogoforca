
export default function Letras({teclado, setTeclado}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    
    return (
            <div className="alfabeto">
                {alfabeto.map((letra) => <button disabled={teclado}>{letra.toUpperCase()}</button>)}
            </div>       
    );
}


//onClick={() => clickLetra(letra)}
//passar a letra como parâmetro da função do onClick
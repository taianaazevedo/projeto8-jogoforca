


export default function Letras({ arrayLetra, clickLetra, statusJogo}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    return (
        <div className="alfabeto">
            {alfabeto.map((letra) =>
                <button
                    key={letra}                    
                    disabled={arrayLetra.includes(letra) ? true : statusJogo}
                    onClick={() => clickLetra(letra)}>
                    {letra.toUpperCase()}
                </button>)}
        </div>
    );
}


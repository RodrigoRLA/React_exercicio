import React, { useState } from "react";
import { ListaDeCompras } from "./ListaDeCompras";

export const AdicionarLista = () => {
    const [lista, setLista] = useState([])
    const [item, setItem] = useState('')

    function handleAdd() {
        setLista([...lista, item])
        setItem('')
    }



    return (
        <>
            <input type="text" value={item}
                onChange={e => setItem(e.target.value)}
            />
            <button onClick={handleAdd}>Adicionar</button>
            <div>
                <ListaDeCompras lista={lista} />
            </div>
        </>
    )
}
import React, { useState, useEffect } from "react";

export const Exemplo = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Você cliclou ${count} vezes`;
    })

    return (
        <>
            <h2>Você clicou {count} vezes</h2>
            <button onClick={() => setCount(count + 1)}> Contador</button>
        </>
    )
}
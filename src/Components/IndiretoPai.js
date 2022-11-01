import React, { useState } from "react";
import { IndiretoFilho } from "./IndiretoFilho";

export const IndiretoPai = () => {

    const [nome, setNome] = useState()

    const [pai, setPai] = useState({
        nome: "?",
        idade: 0,
        vascaino: false
    })

    const informacaoDoPai = (nome, idade, vascaino) => {
        setPai({ nome: nome, idade: idade, vascaino: vascaino })
    }

    function handleChange(e) {
        setNome(e.target.value)
    }

    return (
        <>
            <div>
                <label>Nome: {nome}</label>
                <div>
                    <input type="text" value={nome} onChange={(e) => handleChange(e)} />
                </div>

            </div>

            <div>
                <span>Nome do pai é {pai.nome}</span>
            </div>
            <div>
                <span>A idade do pai é {pai.idade}</span>
            </div>
            <div>
                <span>{pai.flamenguista ? " Sou flamenguista" : " Sou feliz"}</span>
            </div>

            <IndiretoFilho funcaoInfo={informacaoDoPai} />
        </>
    )
}
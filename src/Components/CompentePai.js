import React from "react";
import { ComponenteFilho } from "./ComponenteFilho"

export const ComponentePai = () => {

    return (
        <>
            <h1> Oi sou o ComponentePai</h1>
            <ComponenteFilho
                nome="Rodrigo"
                idade={27}
                flamenguista={false}
            />
        </>
    )
}
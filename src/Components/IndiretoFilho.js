import React from "react";

export const IndiretoFilho = (props) => {

    return (
        <>
            <h3>Filho</h3>
            <button onClick={() =>
                props.funcaoInfo("Luciano", 68, true)}>
                Enviar informações</button>
        </>
    )
}
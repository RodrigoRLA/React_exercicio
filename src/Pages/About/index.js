import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dogApi, apiLocal } from "../../Services";

import { Button, Container, InfoUsuario } from "./style";

export const About = () => {

    const [racas, setRacas] = useState([])

    let { nome } = useParams()
    let navigate = useNavigate()

    function handleClick() {
        navigate("/")
    }

    const getRacas = async () => {
        var cachorro = await dogApi.get(`/breeds`)
        setRacas(cachorro.data)
    }

    const getCategories = async () => {
        var response = await dogApi.get(`/categories`)
        //console.log("Resposta das Categorias:", response.data);
    }

    useEffect(() => {
        getRacas()
        getCategories()
    }, [])

    console.log("log:", racas);

    return (
        <Container>
            <h1> Tela Sobre</h1>
            <InfoUsuario>
                <h3 >Usuário logado:{nome}</h3>
            </InfoUsuario>
            <h2>Quem somos?</h2>
            <h3> Somos uma turma de react Js</h3>
            <Button cor="#C793e1" onClick={() => handleClick()}>Voltar para home</Button>

            {racas.map((res) => {
                return (
                    <>
                        <div>Nome da raça:{res?.name}</div>
                        <div>Origem:{res?.origin}</div>
                        <br />
                    </>
                )
            })}

        </Container>
    )
}
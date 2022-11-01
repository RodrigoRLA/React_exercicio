import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 1rem;
    color: ${props => props.cor};
    border: 2px solid  #C793E1;
    border-radius: 0.4rem;
    margin: 0 1rem;
    padding: 0.25rem 1rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #C793E1;
        color: #FFF;
    }
`

export const Container = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #0f0;
`

export const InfoUsuario = styled.div`
    background: #f0f;
    color: #fff;
`
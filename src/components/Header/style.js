import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    background-color: transparent;
    display: flex;
    padding-top: 1.5rem;
    align-items: center;
    justify-content: space-evenly;
`

export const ImagemLogo = styled.img`
`
export const DivLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
`
export const LinkPrinc = styled.li`
    color: #FF902B;
    cursor: pointer;
`
export const Link = styled.li`
    cursor: pointer;
`

export const DivInteracao = styled.div`
    display: flex;
    align-items: center;
    z-index: 3;
`
export const DivInputPesquisa = styled.div`
   background-color: #fff;
   padding: 0.5rem;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   border-radius: 35px;
   display: flex;
   align-items: center;
   margin-right: 1rem;
`
export const InputPesquisa = styled.input`
    border: none;
    background-color: transparent;
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
    outline: none;

    ::placeholder{
        color: #929292;
    }

    
`

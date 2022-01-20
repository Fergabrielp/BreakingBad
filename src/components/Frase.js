import React from 'react'
import styled from '@emotion/styled'

const ContainerFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 1100px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
    }
`

const Frase = ({frase}) => {

    //En caso de querer iniciar un objeto vacio:
    // if(Object.keys(frase).length === 0) return null;

    return (
        <ContainerFrase>
            <h1>{frase.quote}</h1>
            <p>-{frase.author}</p>
        </ContainerFrase>
    )
}

export default Frase

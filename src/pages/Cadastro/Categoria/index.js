import React from 'react'
import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'


function cadastroCategoria() {
    return(
        <PageDefault>
            <h1>Página de cadastro de Categoria</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default cadastroCategoria
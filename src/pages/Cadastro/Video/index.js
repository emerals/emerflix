import React from 'react'
import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'


function cadastroVideo() {
    return(
        <PageDefault>
            <h1>Página de cadastro de video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default cadastroVideo
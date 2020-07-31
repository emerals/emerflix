import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import Styled from 'styled-components'

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-left: 5%;
`


function PageDefault(props) {
    return(
        <>
            <Menu />
            <Main>
                {props.children}
            </Main>
                
            <Footer />
        </>
    )
}

export default PageDefault
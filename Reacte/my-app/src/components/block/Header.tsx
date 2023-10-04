import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <FirstHead>
                <One></One>
                <Two></Two>
                <Three></Three>
            </FirstHead>

        </HeaderContainer>
    )
}

export default Header

const Three = styled.div`
height:90px;
width:%;
background-color:pink;

`
const Two = styled.div`
height:90px;
width:98%;
background-color:green;

`
const One = styled.div`
height:90px;
width:98%;
background-color:green;
`
const FirstHead = styled.div`
  display:flex;
   height:90px;
  width:98%;
 background-color:green;
`

const HeaderContainer = styled.div`
height:100px;
width:100%;
background-color:gray;
display:flex;
align-items:center;
justify-content:center;
`
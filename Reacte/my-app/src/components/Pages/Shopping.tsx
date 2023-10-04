import React, { useState } from 'react'
import styled from 'styled-components'
import pic from '../../Asset/about-4.png'


export const Shopping = () => {
    const [count, setCount] = useState(0)
    const Click = () => {

        if (count < 10) {
            setCount(count + 1)
        }


    }

    const Decreament = () => {
        if (count > 10) {
            setCount(count - 1)
        }


    }
    return (
        <Container>
            <CadHolder>

                <Cad1>
                    <Img src={pic} />
                </Cad1>
                <Cad2>
                    <ContentWraper>
                        <One>
                            <Par>Mouka 6 X 6 By 12 Premier Mattress
                                Strong Quality</Par>
                            <hr></hr>
                            <P>Product Code: 5237955</P>
                            <P1>₦185,500</P1>
                            <H>Color: gray</H>

                            <Sv>
                                <H2>Size</H2>
                                <H3>6x6 feets</H3>
                            </Sv>
                            <hr></hr>
                            <SizeWraper1>
                                <Size>size</Size>
                                <Button onClick={Decreament} ><Minus>-</Minus></Button>
                                <Cou>{count}</Cou>
                                <Button onClick={Click}>+</Button>
                            </SizeWraper1>
                            <Text>Call us for bulk purchases:
                                Click here to show phone number</Text>
                            <hr></hr>
                            <Btn>BUY NOW</Btn>
                        </One>
                    </ContentWraper>
                </Cad2>


            </CadHolder>
        </Container>
    )
}

const Minus = styled.div`
 font-size:20px;
`
const H3 = styled.div`
 height:30px;
 width:80px;
 background-color:silver;
 display:flex;
 justify-content:center;
 align-items:center;
 margin-left:20px;
 border-radius:8px;
 
`

const H2 = styled.div`

`
const Btn = styled.button`
 padding:15px 80px;
 background-color:#0FDD9F;
 border-radius:20px;
 margin-top:30px;
 border:none;
 &:hover{
    background-color:blue;
    transition:all 3ms;
 }
`

const Text = styled.div`
  margin-top:30px;
  width:80%;
  font-size:25px;
`
const Cou = styled.div`
justify-content:center;
align-items:center;
display:flex;

`
const Button = styled.button`
 padding:8px 30px;
 border-radius:10px;
 background-color:orange;
 font-size:18px;
 border:none;
 
`
const Img = styled.img`
 object-fit:contain;
 padding-left:30px;
 transition: all 3ms;
  box-shadow: 0 0 6px 2px rgba(0,0,0,0.1);
  &:hover{
    box-shadow:0 2px 6px 2px rgba(0,0,0,0.26);
    background-color:silver;
  }
`

const Size2 = styled.div`
 height:30px;
 width:80px;
 border:1px solid black;
 display:flex;
 align-items:center;
 justify-content:center;
 margin-top:10px;
`
const Size = styled.div`
font-size:16px;
gap:10px;
`
const SizeWraper1 = styled.div`
 display:flex;  
 gap:10px;
 margin-top:30px;
 display:flex;
 align-items:center;
//  justify-content:center;
`
const Sv = styled.div`
 display:flex;  
 align-items:center;
 margin-top:30px;
`
const H = styled.div`
font-size:14px;
margin-top:20px;

`
const P1 = styled.div`
font-size:20px;
margin-top:20px;
font-weight:600;
`
const P = styled.div`
font-size:19px;
margin-top:20px;
`
const Par = styled.div`
 font-size:25px;
 font-weight:600;
 width:80%;
 color:orange;
 
`
const One = styled.div`

`
const ContentWraper = styled.div`
height:500px;
width:100%;
// background-color:violet;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

@media screen and (max-width:720){
    width:100%;
 }
`
const Cad2 = styled.div`
height:600px;
width:50%;
// background-color:pink;
display:flex;
// justify-content:center;
align-items:center;
flex-direction:column;


`

const Cad1 = styled.div`
height:600px;
width:50%;
// background-color:green;
`
const CadHolder = styled.div`
height:400px;
width:80%;
background-color:white;
display:flex;
 justify-content:center;
 align-items:center;
//  border:1px solid gray;

 
`
const Container = styled.div`
 height:900px;
 width:100%;
//  background-color:gray;
 display:flex;
 justify-content:center;
 align-items:center;



 
`
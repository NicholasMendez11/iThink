import React, {useState, useEffect, Fragment} from 'react';
import styled from '@emotion/styled'
import Quotes from './components/Quotes';
import Image from './Pictures/quotes.png'
import SocialFollow from './components/SocialFollow';


const Container = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
background: blur(5px) brightness(0.5);
margin-top:1px;
`
const Button = styled.button`
  background: -webkit-linear-gradient(top left, #C1A9B5 0%, #de8ab5 40%, #F8E6EF 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;


function App() {

  const [quote, getAQuote] = useState({})

  const random =(min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

  const consultAPI = async () =>{
    const api= await fetch('https://philosophy-quotes-api.glitch.me/quotes');
    const quote = await api.json()

    getAQuote(quote[random(0,100)]);
    
    
      

    
    
    
  }

  useEffect( () => {

    consultAPI()

  },[])
  return (

    <Fragment>
    <Container>
     <img src={Image} alt=""/>
     

      <Quotes
      quote={quote}
    

      />
      <Button
      onClick={consultAPI}
      >Get Quote</Button>
    
    </Container>

    <SocialFollow/>
    </Fragment>
  );
}

export default App;
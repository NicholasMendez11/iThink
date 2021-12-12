import React from 'react';
import styled from '@emotion/styled'

const QuoteContainer = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    margin-top: 2rem;

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;    

        &::before{
            content: open-quote;
            font-size: 9rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Genema, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;

    }

`;

const Quotes = ({quote}) => {

    if(Object.keys(quote).length ===0)return null;

    return ( 
   <QuoteContainer>
       
        <h1>{quote.quote}</h1>
        <p>- {quote.source}</p>
    </QuoteContainer>
     );
}
 
export default Quotes;
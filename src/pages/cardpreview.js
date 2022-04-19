import React from 'react'
import { Router as MyRouter } from "@reach/router"
import CardOneComponent from '../components/card-components/cards/cardInfo';

const CardPreview = () => {
  return (
    <MyRouter> 
      <CardOneComponent path="cardpreview/:slug" />
    </MyRouter>
  )
}

export default CardPreview
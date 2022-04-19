import React from 'react'
import { Router as MyRouter,Link } from "@reach/router"
import CardOneComponent from '../components/card-components/cards/cardInfo';

const CardPreview = () => {
  return (
    <MyRouter> 
      <CardOneComponent path={`cardpreview/users/:slug`} />
    </MyRouter>
  )
}

export default CardPreview
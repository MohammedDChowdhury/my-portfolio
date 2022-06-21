import React from 'react'
import CTA from './CTA'
export default function Header() {
  return (
    <header> 
      <div className="container header__container">
      <h5>Hello I'm </h5>
      <h1>Mohammed Chowdhury</h1>
      <h5 className="text-light">Front-End Developer</h5>   
      <CTA />
      </div>   
      </header>
  )
}

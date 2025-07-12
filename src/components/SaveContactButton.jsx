import React from 'react'
import ContactButton from './helper/ContactButton'
import { useNavigate } from 'react-router'

function SaveContactButton() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/contactpage")
    }
  return (
    <div>
       <ContactButton onClick={handleClick}>
          Contact Me
        </ContactButton>
    </div>
  )
}

export default SaveContactButton
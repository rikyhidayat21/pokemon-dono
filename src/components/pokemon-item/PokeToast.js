import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import pokeball from '../../images/pokeball.png'
export default function PokeToast({ title, bg }) {
  return (
    <ToastContainer position="bottom-end">
      <Toast className="d-inline-block m-1" bg={bg}>
        <Toast.Header>
          <img src={pokeball} className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body >
          {title}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

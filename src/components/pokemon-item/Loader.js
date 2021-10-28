import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loader() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px"
    }}>
      <Spinner animation="grow" variant="primary" />
    </div>
  )
}

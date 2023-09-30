import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err = useRouteError()
    console.log("error", err)
  return (
    <div>
    <h1>Oops!! Something went wrong..</h1>
    <h2>{err.error.message}</h2>
    <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default ErrorPage
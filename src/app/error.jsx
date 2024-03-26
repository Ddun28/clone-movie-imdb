'use client'

import { useEffect } from "react"
export default function error({error, reset}) {
    useEffect(()=> {
        console.log(error);
    }, [error])
  return (
    <div className="text-center mt-10">
    <h1>Lo siento ha ocurrido un error, intenta mas tarde</h1>
        <button className="hover:text-amber-600" onClick={()=>reset()}>Reintentar</button>
        </div>
  )
}

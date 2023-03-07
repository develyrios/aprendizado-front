import { useState } from "react"

export const Passe = ({ id, type, title, placeholder, passe, setPasse }) => {
    return(

        <>
        <label htmlFor={id}>
            {title}
        </label>
        
        <input type={type} 
            id={id} 
            placeholder={placeholder} 
            value={passe} 
            onChange={e => setPasse(+e.target.value)}
        />
        </>
    )
}
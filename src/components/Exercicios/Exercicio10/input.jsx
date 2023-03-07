import { useState } from "react"

export const Input = ({ id, type, title, placeholder }) => {
    const [cor,setCor] = useState()

    return(

        <>
        <label htmlFor={id}>
            {title}
        </label>
        
        <input type={type} 
            id={id} 
            placeholder={placeholder} 
            value={cor} 
            onChange={e => setCor(e.target.value)}
        />
        </>
    )
}
export const Input = ({ id, type, title, placeholder }) => {
    return(
        <>
        <label htmlFor={id}>
            {title}
        </label>
        
        <input type={type} id={id} placeholder={placeholder}/>
        </>
    )
}
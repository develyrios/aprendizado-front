export const Passo = ({ id, type, title, placeholder, passo, setPasso }) => {
    return(

        <>
        <label htmlFor={id}>
            {title}
        </label>
        
        <input type={type} 
            id={id} 
            placeholder={placeholder} 
            value={passo} 
            onChange={e => setPasso(+e.target.value)}
        />
        </>
    )
}
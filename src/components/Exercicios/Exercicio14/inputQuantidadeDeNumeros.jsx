export const InputQuantidadeDeNumeros = ({ 
    id, 
    type, 
    title, 
    placeholder, 
    quantidadeDeNumeros, 
    setQuantidadeDeNumeros 
}) => {
return(
    <>
    <label htmlFor={id}>
        {title}
    </label>
    
    <input type={type} 
        id={id} 
        placeholder={placeholder} 
        value={quantidadeDeNumeros} 
        onChange={e => setQuantidadeDeNumeros(+e.target.value)}
    />
    </>
)
}
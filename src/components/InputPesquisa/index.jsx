export const InputPesquisa = ({ 
    id, 
    type, 
    title, 
    placeholder, 
    conteudo, 
    setConteudo 
}) => {
    return(
        <>
            <label htmlFor={id}>
                {title}
            </label>
            
            <input type={type} 
                id={id} 
                placeholder={placeholder} 
                value={conteudo} 
                onChange={e => setConteudo(e.target.value)}
            />
        </>
    )
}
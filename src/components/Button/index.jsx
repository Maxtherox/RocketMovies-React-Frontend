import { Container } from "./styles";

export function Button({title, loading, href = false, ...rest}){

    return(
        <Container 
        type="button"
        href={href}
        disabled={loading}
        {...rest}
        >
            {loading ? 'carregando...' : title}
        </Container>
    )
    
}
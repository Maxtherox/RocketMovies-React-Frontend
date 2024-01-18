import { Container, Profile, Brand, Search, Name } from "./styles";
import { Input } from "../Input"
import { ButtonText} from "../ButtonText"

export function Header(){
    return(
        <Container>
            <Brand>
             <h1>RocketMovies</h1>
            </Brand>
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
            
                <Name>
                    <div>
                    <strong>Guilherme Pereira</strong>
                    <a><ButtonText title="sair" isactive = "false"/></a>
                    </div>
                   
                    <Profile to="/profile">  
                    <img src="https://github.com/maxtherox.png" alt="foto do usuário" />
                    </Profile>
                </Name>

            
        </Container>
    )
}
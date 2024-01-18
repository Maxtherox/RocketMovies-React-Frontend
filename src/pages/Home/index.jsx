import { Container, NewNote, Content, Title } from "./styles";
import { Header } from "../../components/Header"
import { Note } from '../../components/Note'
import {FiPlus, FiSearch} from 'react-icons/fi'
import { Section} from '../../components/Section'


export function Home(){
    return(
        <Container>
            <Header/>
            <main>
            <Content>
                <Section title="Minhas notas">
                <Title>
            <h1>Meus filmes</h1>
            <NewNote to="/new">
                <FiPlus/>
                    Adicionar filme
                </NewNote>
            </Title>
                    
                    <Note to="/Details" data=
                    {{

                        title: 'Interestellar', 
                        rating: 4,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                        tags: [
                            {id: '1', name: 'Ficção cientifica' },
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Familia'}
                        ]
                    }}/>
                    <Note data=
                    {{
                        title: 'Interestellar', 
                        rating: 4,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                        tags: [
                            {id: '1', name: 'Ficção cientifica' },
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Familia'}
                        ]
                    }}/>
                    <Note data=
                    {{
                        title: 'Interestellar', 
                        rating: 4,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                        tags: [
                            {id: '1', name: 'Ficção cientifica' },
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Familia'}
                        ]
                    }}/>
                    <Note data=
                    {{
                        title: 'Interestellar', 
                        rating: 4,
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                        tags: [
                            {id: '1', name: 'Ficção cientifica' },
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Familia'}
                        ]
                    }}/>
                </Section>

            </Content>
            </main>
        </Container>
    );
}
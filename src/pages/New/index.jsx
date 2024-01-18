import { Header} from '../../components/Header'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section} from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export function New(){
    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        

                        <div>
                            <a to="/">voltar</a>
                            <div><a href=""><FiArrowLeft/></a></div>
                            
                        </div>
                        
                        
                        
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input placeholder="Titulo"/>
                        <Input placeholder="Rating (de 0 a 5)"/>
                    </div>
                    
                    <Textarea placeholder="Observações"/>

                    <h2>Marcadores</h2>

                    <Section title="marcadores">
                        <div className='tags'>
                        <NoteItem value="Ficção científica"/>
                        <NoteItem isNew placeholder="Novo marcador"/>
                        </div>
                    </Section>
                    <div className='Buttons'>
                        <Button title="Excluir Filme"/>
                        <Button title="Salvar alterações"/>
                    </div>
                   
                </Form>
            </main>
        </Container>
    )
}
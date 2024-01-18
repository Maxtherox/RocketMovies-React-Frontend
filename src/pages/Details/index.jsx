import { Container, Links, Content, Uploader, Title, Buttons} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { MovieRating } from '../../components/MovieRating';
import { Profile } from '../../components/Header/styles';
import { FiClock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export function Details(){
    return(
      <Container>
        <Header/>
  
        <main>
          <Content> 
            <Buttons>
                
                <div>
                <a href=""><FiArrowLeft/></a>
                <ButtonText title="Voltar"/>
                </div>
                 
                 <ButtonText title="Excluir nota"/>
            </Buttons>

            <Title>
                <h1>
              Introdução ao react
                </h1>
                <div><MovieRating rating={4} size={12} width={12}/></div>
                
            </Title>

            <Uploader>
                    <Profile to="/profile">  
                    <img src="https://github.com/maxtherox.png" alt="foto do usuário" />
                    </Profile>
                    <p>Por Guilherme Pereira</p>
                    <FiClock/>
                    <p>23/05/22 ás 08:00</p>
            </Uploader>

            <Section title="Marcadores">
                  <Tag title="express"/>
                  <Tag title="Node"/>
            </Section>         
            <p>
                Pragas nas colheitas fizeram a civiliza&ccedil;&atilde;o humana regredir para uma sociedade agr&aacute;ria em futuro de data desconhecida.
                Cooper, ex-piloto da NASA, tem uma fazenda com sua fam&iacute;lia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto est&aacute; 
                assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o &quot;fantasma&quot; &eacute; uma intelig&ecirc;ncia 
                desconhecida que est&aacute; enviando mensagens codificadas atrav&eacute;s de radia&ccedil;&atilde;o gravitacional, deixando coordenadas 
                em bin&aacute;rio que os levam at&eacute; uma instala&ccedil;&atilde;o secreta da NASA liderada pelo professor John Brand. 
                O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer
                condi&ccedil;&otilde;es de sobreviv&ecirc;ncia para a esp&eacute;cie humana. As &quot;miss&otilde;es L&aacute;zaro&quot; 
                enviadas anos antes identificaram tr&ecirc;s planetas potencialmente habit&aacute;veis orbitando o buraco negro Garg&acirc;ntua:
                Miller, Edmunds e Mann &ndash; nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a 
                nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habit&aacute;vel, a humanidade
                ir&aacute; seguir para ele na instala&ccedil;&atilde;o da NASA, que &eacute; na realidade uma enorme esta&ccedil;&atilde;o
                espacial. A partida de Cooper devasta Murphy. Pragas nas colheitas fizeram a civiliza&ccedil;&atilde;o humana regredir
                para uma sociedade agr&aacute;ria em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua 
                fam&iacute;lia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto est&aacute; assombrado por um fantasma que
                tenta se comunicar com ela. Pai e filha descobrem que o &quot;fantasma&quot; &eacute; uma intelig&ecirc;ncia desconhecida 
                que est&aacute; enviando mensagens codificadas atrav&eacute;s de radia&ccedil;&atilde;o gravitacional, deixando coordenadas 
                em bin&aacute;rio que os levam at&eacute; uma instala&ccedil;&atilde;o secreta da NASA liderada pelo professor John Brand. <br/><br/> O
                cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condi&ccedil;&otilde;es
                de sobreviv&ecirc;ncia para a esp&eacute;cie humana. As &quot;miss&otilde;es L&aacute;zaro&quot; enviadas anos antes identificaram tr&ecirc;s
                planetas potencialmente habit&aacute;veis orbitando o buraco negro Garg&acirc;ntua: Miller, Edmunds e Mann &ndash; nomeados em homenagem aos
                astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos
                planetas se mostrar habit&aacute;vel, a humanidade ir&aacute; seguir para ele na instala&ccedil;&atilde;o da NASA, que &eacute;
                na realidade uma enorme esta&ccedil;&atilde;o espacial. A partida de Cooper devasta Murphy.
            </p>  
          </Content>
        </main>
      </Container>
    )
  }
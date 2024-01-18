import { Container } from "./styles";
import { Tag} from "../Tag"
import { FiStar } from "react-icons/fi";
import { MovieRating } from "../../components/MovieRating";


export function Note({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div><MovieRating rating={data.rating} /></div>
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                            data.tags.map(tag => {
                            return (
                            <Tag key={tag.id} title={tag.name}/>
                            )
                        })  
                    }
                </footer>
            }
        </Container>
    );
}
import CardPopular from "../CardPopular/CardPopular"
import { Container } from "./style"


const SecTwo = () => {
    return(
        <Container>
            <CardPopular
                srcImage="/img-banner.png"
                titleCard="Vanilla Latte"
                likesCard="21K"/>
        </Container>
    )
}

export default SecTwo
import { Container, ImagemLogo, DivLinks, Link, LinkPrinc, DivInteracao, InputPesquisa, DivInputPesquisa } from "./style"
import Badge from '@mui/material/Badge';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Header = () => {
    return(
        <Container>
            <ImagemLogo src="/logo-app.svg"/>
            <DivLinks>
                <LinkPrinc>About us</LinkPrinc>
                <Link>Our Product</Link>
                <Link>Delivery</Link>
            </DivLinks>
            <DivInteracao>
                <DivInputPesquisa>
                    <SearchRoundedIcon fontSize="small" sx={{marginRight:"4px"}}/>
                    <InputPesquisa placeholder="Search your favorite"/>
                </DivInputPesquisa>
                
                <Badge variant="dot" color="primary">
                    <LocalGroceryStoreOutlinedIcon  sx={{color:"#000", cursor:"pointer"}}/>
                </Badge>
            </DivInteracao>
        </Container>
    )
}

export default Header
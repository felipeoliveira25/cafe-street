import BtnOrder from "../BtnOrder/BtnOrder";
import { Container, DivInteraction, DivTexts, FirstDiv, ImgBanner, ImgGraos, LinkMoreMenu, SubTitleDivTexts, TitleDivTexts } from "./style";

const SecOne = () => {
    return(
        <Container>
            <FirstDiv>
                <DivTexts>
                    <TitleDivTexts>
                        Enjoy your <span style={{color:"#FF902B"}}>coffee</span> before your activity
                    </TitleDivTexts>
                    <SubTitleDivTexts>
                        Boost your productivity and build your mood with a glass of coffee in the morning 
                    </SubTitleDivTexts>
                    <DivInteraction>
                        <BtnOrder/>
                        <LinkMoreMenu>More Menu</LinkMoreMenu>
                    </DivInteraction>
                </DivTexts>
                <ImgBanner src="/img-banner.png"/>
            </FirstDiv>
            <ImgGraos src="/img-graos.svg"/>
        </Container>
    )
}

export default SecOne
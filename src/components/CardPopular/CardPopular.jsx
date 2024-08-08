/* eslint-disable react/prop-types */
import { OutdoorContainer, IndoorContainer, ImagemCard, DivDescCard, TitleDescCard, LikesDescCard, DivPt1, DivPt2, DivTempCard, TempCard } from "./style"
import BtnMarket from "../BtnMarket/BtnMarket"

const CardPopular = ({srcImage, titleCard, likesCard}) => {
    return(
        <OutdoorContainer>
            <IndoorContainer>
                <ImagemCard src={srcImage}/>
                <DivDescCard>
                    <DivPt1>
                        <TitleDescCard>{titleCard}</TitleDescCard>
                        <LikesDescCard>{likesCard}</LikesDescCard>
                    </DivPt1>
                    <DivPt2>
                        <DivTempCard>
                            <TempCard>Hot</TempCard>
                            <TempCard>Cold</TempCard>
                        </DivTempCard>
                        <BtnMarket/>
                    </DivPt2>
                </DivDescCard>
            </IndoorContainer>
        </OutdoorContainer>
    )
}

export default CardPopular
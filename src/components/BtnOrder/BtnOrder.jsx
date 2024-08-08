
import { ButtonOrder, TextButtonOrder } from "./style"
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';



const BtnOrder = () => {
    return(
        <ButtonOrder>
            <TextButtonOrder>Order now</TextButtonOrder>
            <LocalGroceryStoreOutlinedIcon  sx={{color:"#fff", fontSize:"0.9rem"}}/>
        </ButtonOrder>
    )
}

export default BtnOrder
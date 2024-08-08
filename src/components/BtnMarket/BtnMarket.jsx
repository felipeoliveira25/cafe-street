/* eslint-disable react/prop-types */
import { ButtonMarket } from "./style"
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const BtnMarket = () => {
    return(
        <ButtonMarket >
            <LocalGroceryStoreOutlinedIcon  sx={{color:"#fff", fontSize:"0.9rem"}}/>
        </ButtonMarket>
    )
}

export default BtnMarket
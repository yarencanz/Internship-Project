import { CardContent, InputAdornment, OutlinedInput} from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

 

function Comment(props){
    const {text, userId, userName} = props;

    return(
        <CardContent sx={{display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center"}}>
            <OutlinedInput
            disabled
            id="outlined-adornment-amount"
            multiline 
            inputProps={{ maxLength: 25 }}
            fullWidth
            value={text}
            startAdornment = {
                <InputAdornment
                position="start">
                    <Link className='link' to={{ pathname: '/users/' + userId }}>
                         <Avatar sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} 
                         aria-label="recipe">
                             {userName.charAt(0).toUpperCase()}
                         </Avatar>
                    </Link>
                </InputAdornment>
            }
            sx={{color: "black", backgroundColor: "white"}}
            ></OutlinedInput>
        </CardContent>

    )
}
export default Comment;
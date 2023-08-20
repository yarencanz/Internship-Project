import { Button, CardContent, InputAdornment, OutlinedInput} from "@mui/material";
import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

 

function CommentForm(props){
    const { userId, userName, postId, refreshComments} = props;
    const [text, setText] = useState("");
    const saveComment = () => {
        fetch("/comments",
        {
           method: "POST",
           headers: {
            "Content-Type": "application/json"
           },
            body: JSON.stringify({
            postId: postId,
            userId: userId,
            text: text,
           }),
        })
        .then((res) => {refreshComments();
            return res.json()})
        .catch((err) => console.log(err))
      }
    const handleSubmit = () => {
        saveComment();
        setText("");
    }

    const handleChange = (value) => {
        setText(value);
    }

    return(
        <CardContent sx={{display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center"}}>
            <OutlinedInput
            id="outlined-adornment-amount"
            multiline 
            inputProps={{ maxLength: 250 }}
            fullWidth
            onChange={(i) => handleChange(i.target.value)}
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
            endAdornment= {
               <InputAdornment position="end" >
                <Button
                  variant="contained"
                  sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', color: 'white' }}
                  onClick={handleSubmit}>
                  Comment
                </Button>
               </InputAdornment>
            }
            value={text}
            sx={{color: "black", backgroundColor: "white"}}
            ></OutlinedInput>
        </CardContent>

    )
}
export default CommentForm;
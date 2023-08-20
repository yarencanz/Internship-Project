import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Box, Button, InputAdornment, OutlinedInput, Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

function PostForm(props){
  const { userId, userName, refreshPosts} = props;
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [isSent, setIsSent] = useState(false);

  const savePost = () => {
    fetch("/posts",
    {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
        body: JSON.stringify({
        title: title,
        user_id: userId,
        text: text,
       }),
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
  }

  const handleSubmit = () => {
    savePost();
    setIsSent(true);
    setTitle("");
    setText("");
    refreshPosts();
  }

  const handleTitle = (value) => {
    setTitle(value);
    setIsSent(false);
  }

  const handleText = (value) => {
    setText(value);
    setIsSent(false);
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSent(false);
  };

  return(
    <>
    <Box>
      <Snackbar open={isSent} autoHideDuration={1200} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your post is sent!
        </Alert>
      </Snackbar>
    </Box>
    
    <Card sx={{ width: 345 }}>
        <CardHeader
          avatar={<Link className='link' to={{ pathname: '/users/' + userId }}>
            <Avatar sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} aria-label="recipe">
              {userName.charAt(0).toUpperCase()}
            </Avatar>
          </Link>}
          title={<OutlinedInput 
            id="outlined-adornment-amount"
            multiline placeholder="Title" inputProps={{ maxLength: 25 }}
            fullWidth
            value={title}
            onChange={(i) => handleTitle(i.target.value)}>

          </OutlinedInput>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <OutlinedInput id="outlined-adornment-amount"
              multiline
              placeholder="Text"
              inputProps={{ maxLength: 250 }}
              fullWidth
              value={text}
              onChange={(i) => handleText(i.target.value)}
              endAdornment={<InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', color: 'white' }}
                  onClick={handleSubmit}>
                  Post
                </Button>
              </InputAdornment>}>

            </OutlinedInput>
          </Typography>
        </CardContent>

      </Card></>

   
    
  )
}

export default PostForm;
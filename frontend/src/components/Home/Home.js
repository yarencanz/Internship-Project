import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./Home.css"

function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error){
        return <div> Error !!!</div>;
    }else if(!isLoaded){
        return <div> Loading... </div>
    }else{
        return(

            <>
            <CssBaseline />
            <Container fixed className="container" maxWidth="sm">
              <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, py: 2}} >
            {postList.map( post => (
                <Post title={post.title} text={post.text}></Post> 
                ))}

              </Box>
            </Container>
          </>

        )
    }
  
}

export default Home;
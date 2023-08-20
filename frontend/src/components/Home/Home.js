import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./Home.css"
import PostForm from "../Post/PostForm";


function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    const refreshPosts = () => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            },
            (error) => {
                console.log(error);
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    useEffect(() => {
       refreshPosts()
    }, [])

    if(error){
        return <div> Error !!!</div>;
    }else if(!isLoaded){
        return <div> Loading... </div>
    }else{
        return(

            <>
            <CssBaseline />
            <Container fixed className="container" maxWidth="m">

              <Box sx={{ bgcolor: '#e8e4e3',  display: 'flex', 
              flexDirection: 'column', alignItems: 'center', gap: 4, py: 2}} >
                <PostForm userId = {1} userName= {"yarencanz"} refreshPosts = {refreshPosts}/>
                {postList && postList.length>0 &&
                postList.map( post => (
                <Post key={post.id} likes= {post.postLikes} postId = {post.id} userId = {post.userId} userName= {post.userName} title={post.title} text={post.text} 
                ></Post> 
                ))}

              </Box>
            </Container>
          </>

        )
    }
  
}

export default Home;
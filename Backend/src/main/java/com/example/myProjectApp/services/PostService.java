package com.example.myProjectApp.services;

import com.example.myProjectApp.entities.Post;
import com.example.myProjectApp.entities.User;
import com.example.myProjectApp.repos.PostRepository;
import com.example.myProjectApp.requests.PostCreateRequest;
import com.example.myProjectApp.requests.PostUpdateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

   private PostRepository postRepository;
   private UserService userService;

    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
        this.userService = userService;
    }

    public List<Post> getAllPosts(Optional<Long> userId) {
        if(userId.isPresent())
            return postRepository.findByUserId(userId.get());
        return postRepository.findAll();
    }

    public Post getOnePostById(Long postId) {
        return postRepository.findById(postId).orElse(null);
    }

    public Post createOnePost(PostCreateRequest newPostRequest) {
       User user = userService.getOneUser(newPostRequest.getUserId());
       if(user == null)
           return null;
       Post toSave = new Post();
       toSave.setId(newPostRequest.getId());
       toSave.setText(newPostRequest.getText());
       toSave.setTitle(newPostRequest.getTitle());
       toSave.setUser(user);
       return  postRepository.save(toSave);

    }

    public Post updateOnePostById(Long postId, PostUpdateRequest updatePost ) {
        Optional<Post> post = postRepository.findById(postId);
        if(post.isPresent()) {
            Post toUpdate = post.get();
            toUpdate.setText(updatePost.getText());
            toUpdate.setTitle(updatePost.getTitle());
            postRepository.save(toUpdate);
            return toUpdate;
        }
       return null;
    }

    public void deleteOnePostById(Long postId) {
        postRepository.deleteById((postId));
    }
}
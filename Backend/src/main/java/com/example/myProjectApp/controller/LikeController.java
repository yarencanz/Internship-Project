package com.example.myProjectApp.controller;

import com.example.myProjectApp.entities.Like;
import com.example.myProjectApp.requests.LikeCreateRequest;
import com.example.myProjectApp.responses.LikeResponse;
import com.example.myProjectApp.services.LikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/likes")
public class LikeController {

    private LikeService likeService;

    public LikeController(LikeService likeService){
        this.likeService = likeService;
    }

    @GetMapping
    public List<LikeResponse> getAllLikes(@RequestParam Optional<Long> userId, @RequestParam Optional<Long> postId){
        return  likeService.getAllLikesWithParam(userId,postId);
    }

    @PostMapping
    public Like createOneLike(@RequestBody LikeCreateRequest request){
        return  likeService.createOneLike(request);
    }
    @GetMapping("/{likeId}")
    public Like getOneLike(@PathVariable Long likeId){
        return likeService.getOneLikeById(likeId);
    }
    @DeleteMapping("/{commentId}")
    public  void deleteOneComment(@PathVariable Long likeId){
        likeService.deleteOneLikeById(likeId);
    }

}

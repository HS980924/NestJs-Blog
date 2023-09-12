import { PostDto } from './blog.model';
import { BlogFileRepository, BlogRepository } from './blog.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    // posts = [];
    // blogRepository: BlogRepository;

    // constructor(){
    //     this.blogRepository = new BlogFileRepository();
    // }
    constructor(private blogRepository: BlogFileRepository) {}

    // 위의 생성자와 같은 기능, 아래 코드는 풀어서 쓴 코드
    // private blogRepository: BlogFileRepository;
    // constructor(blogRepository: BlogFileRepository){
    //     this.blogRepository = blogRepository;
    // }

    // getAllPosts()는 컨트롤러의 함수와 이름을 동일하게 한 서비스 계층의 함수
    async getAllPosts(){
        return await this.blogRepository.getAllPost();
    }

    // 타입스크립트에서 함수의 매개변수 선언부에 매개변수명:매개변수타입, 매개변수명:매개변수타입 형식으로 선언
    createPost(postDto: PostDto){
        this.blogRepository.createPost(postDto);
    }

    async getPost(id){
        return await this.blogRepository.getPost(id);
        // const post = this.posts.find((post)=>{
        //     return post.id === id;
        // });
        // console.log(post);
        // return post;
    }    

    async deletePost(id){
        return await this.blogRepository.deletePost(id);
        // const filteredPosts = this.posts.filter((post)=> post.id !== id);
        // this.posts = [...filteredPosts];
    }

    async updatePost(id, postDto:PostDto){
        return await this.blogRepository.updatePost(id,postDto);
        // let updateIndx = this.posts.findIndex((post) => post.id === id);
        // const updatePost = {id, ...postDto, updatedDt:new Date()};
        // this.posts[updateIndx] = updatePost;
        // return updatePost;
    }

}
import { Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common';
import { BlogService } from './blog.service';
// Controller 데코레이터는 클래스에 붙음
// 괄호 안에 매개변수로 URL 주소로 사용할 값이 들어감
// {서버 주소}/blog 이하의 요청을 처리한다는 뜻
@Controller('blog')
export class BlogController {
    // blogService: BlogService;

    // constructor(){
    //     this.blogService = new BlogService();
    // }
    constructor(private blogService: BlogService){}

    @Get()
    getAllPosts(){
        console.log("모든 게시글 가져오기");
        return this.blogService.getAllPosts();
    }

    @Post()
    createPost(@Body() postDto){
        console.log('게시글 작성');
        this.blogService.createPost(postDto);
        return 'success';
    }
    // @Body()는 매개변수에 붙이는 데코레이터
    // @Body는 함수의 body로 오는 값을 매개변수에 할당

    @Get('/:id')
    async getPost(@Param('id') id:string){
        console.log(`[id: ${id}게시글 하나 가져오기]`);
        // return this.blogService.getPost(id);
        const post = await this.blogService.getPost(id);
        console.log(post);
        return post;
    }
    // @Param은 URL param의 값을 함수 매개변수에 할당

    @Delete('/:id')
    deletePost(@Param('id') id:string) {
        console.log("게시글 삭제");
        this.blogService.deletePost(id);
        return 'success';
    }

    @Put('/:id')
    updatePost(@Param('id') id:string, @Body() postDto){
        console.log('게시물 업데이트',id,postDto);
        return this.blogService.updatePost(id, postDto);
    }

}
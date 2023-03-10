import { Controller, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    
    @Post()
    postData() {
        return 'This posts something'
    }
}

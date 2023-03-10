import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './usersDto/create-users.dto';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ){}
    
    @Get()
    getAllUsers() {
        return this.usersService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id', ParseUUIDPipe) id: string){
        return this.usersService.findOne(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);
    }
}

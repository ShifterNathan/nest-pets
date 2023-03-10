import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './usersDto/create-users.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateCatDto } from 'src/common/dtos/catsDto/update-cat.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: string): Promise<User> {

        const user = await this.userRepository.findOneBy({id});

        if (!user){
            throw new NotFoundException(`El sujeto con id '${id}' no se pudo encontrar`)
        }
        return user
    }

    async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {

        try {
            const user = this.userRepository.create(createUserDto);
            await this.userRepository.save(user)
            return user;
        }
        catch(error){
            throw new BadRequestException(error)
        }        
    }

    async update(id: string, updateCatDto: UpdateCatDto){
        const user = await this.userRepository.preload({id: id, ...updateCatDto})
        if(!user) throw new NotFoundException(`El sujeto con id '${id}' no se pudo encontrar`)

        try{
            await this.userRepository.save(user)
            return user;
        }
        catch(error){
            throw new BadRequestException(error)
        }
    }

    async delete(id: string): Promise<void>{
        await this.userRepository.delete(id)
    }
}

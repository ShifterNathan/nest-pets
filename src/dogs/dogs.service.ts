import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateDogDto } from 'src/common/dtos/dogsDto/update-cat.dto';
import { Repository } from 'typeorm';

import { createDogDto } from '../common/dtos/dogsDto/create-dog.dto';
import { Dog } from './entities/dog.entity';


@Injectable()
export class DogsService {

    constructor(
        @InjectRepository(Dog)
        private readonly dogRepository: Repository<Dog>
    ){}

    async findAll(): Promise<Dog[]>{
        return await this.dogRepository.find();
    }

    async findOne(id: string): Promise<Dog>{

        const dog = await this.dogRepository.findOneBy({id});

        if(!dog){
            throw new NotFoundException(`El caniche con id '${id}' no se pudo encontrar :( `)
        }
        return dog;
    }

    async create(createDogsDto: createDogDto){
        
        try {
            const dog = this.dogRepository.create(createDogsDto)
        }

        catch(error) {
            throw new BadRequestException(error)
        }
    
    }

    async update(id: string, updateDogDto: UpdateDogDto){
        const cat = await this.dogRepository.preload({id: id, ...updateDogDto})
        if (!cat) throw new NotFoundException(`El michi con id '${id}' no se pudo encontrar :(`)
        
        try{
            await this.dogRepository.save(cat)
            return cat;
        }
        catch(error){
            throw new BadRequestException(error)
        }
    }

    async delete(id: string): Promise<void>{
        await this.dogRepository.delete(id);
        
    }  

}

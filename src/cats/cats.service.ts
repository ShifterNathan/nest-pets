import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from '../common/dtos/catsDto/create-cat.dto';
import { UpdateCatDto } from '../common/dtos/catsDto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {

    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ){}


    async findAll(): Promise<Cat[]>{
        return await this.catRepository.find();
    }


    async findOne(id: string): Promise<Cat> {

        const cat = await this.catRepository.findOneBy({id})

        if(!cat){
            throw new NotFoundException(`El michi con id '${id}' no se pudo encontrar :(`)
        }
        
        return cat;
    }

    async create(createCatDto: CreateCatDto): Promise<CreateCatDto> {

        try {
            const cat = this.catRepository.create(createCatDto);
            await this.catRepository.save(cat)
            return cat;
            
        }

        catch(error) {
            throw new BadRequestException(error)
        }

        
    }

    async update(id: string, updateCatdto: UpdateCatDto){
        const cat = await this.catRepository.preload({id: id, ...updateCatdto})
        if (!cat) throw new NotFoundException(`El michi con id '${id}' no se pudo encontrar :(`)
        
        try{
            await this.catRepository.save(cat)
            return cat;
        }
        catch(error){
            throw new BadRequestException(error)
        }
    }

    async delete(id: string): Promise<void>{
        await this.catRepository.delete(id);
        
    }   
}

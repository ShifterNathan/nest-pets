import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/entities/cat.entity';
import { Dog } from 'src/dogs/entities/dog.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'root',
              password: 'root',
              database: 'pets',
              entities: [Cat, Dog, User, Post],
              // autoLoadEntities: true,
              synchronize: true,
              retryAttempts: 2,
              retryDelay: 1000,
            }),
    ]
})
export class DatabaseModuleModule {}
